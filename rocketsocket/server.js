const express = require('express');
const app = require('express')();
const chalk = require('chalk');
const volleyball = require('volleyball');
const WebSocket = require('ws');
const fs = require('fs');
const appdata = require('appdata-path')

require('dotenv').config();

fs.readFile(appdata.getAppDataPath('\\bakkesmod\\bakkesmod\\cfg\\config.cfg'), 'utf8',(err, data) => {
  if(err){
    console.log(chalk.redBright(err));
  }
  else{
    let file = data.split('\n')
    let index = file.findIndex((element) => element.startsWith("rcon_password"))
    process.env.RCONPASS = file[index].split("\"")[1]
  }
});

const port = 6969;
// Init server
const server = app.listen(port, () => {
  console.log(
    chalk.green(
      `Server listening at ${chalk.whiteBright(`http://localhost:${port} ✓`)}`
    )
  );
  console.log(chalk.greenBright(`Ready...`));
});

// Socket IO client
const io_client = require('socket.io-client');
console.log(process.env.CORS.split(', '));

// Init socket.io, pass server for connection
// place hosts in dot env file for CORS origins
const io = require('socket.io')(server, {
  cors: {
    origin: process.env.CORS.split(', '),
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const { instrument } = require('@socket.io/admin-ui');

const { setTimeout } = require('timers');

// Timestamp console logs
require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss' });

// middleware for logging and parseing of data
app.use(volleyball);
app.use(express.json());

// Allow CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

// Routing for serving up overlay from build folder
const path = require('path');
app.use(express.static('build'));
app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/src/styles.scss', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'styles.scss'));
});

// ROCKET LEAGUE STUFF:

let gameStreams = {};
let rlHost = process.env.RLHOST;
let RCONHost = process.env.RCONHOST;

io.on('connection', (socket) => {
  socket._id;
  socket.watching;

  socket.on('join', (id) => {
    socketId = id;
    if (!!socket._id) {
      socket.leave('game');
      endGameStream(socket._id);
      console.log(`Client ${id} left`);
    }
    socket._id = id;
    console.log(`Client ${id} connected, ID: ${socket.id}`);
  });

  socket.on('watchGame', () => {
    if (!socket.watching) {
      socket.join('game');
      createGameStream(socket._id);
      socket.watching = true;
      console.log(
        `Client ${socket._id} in rooms: ${Array.from(socket.rooms).join(', ')}`
      );
    }
  });

  socket.on('disconnect', () => {
    if (socket._id && socket.watching) {
      socket.leave('game');
      endGameStream(socket._id);
    }
  });

  // Emit payload data to clients
  socket.on('payload', (payload) => {
    // console.log(payload);
    // socket.to('REACTLOCAL').emit('payload', payload);
    // ! socket.to will NOT be received by the sender, change to io.to for single page apps if you want the sender to also receive the payload for state updates, etc. !
    socket.to('game').emit('payload', payload);
  });

  // Emit payload data to clients
  socket.on('RCON', (payload) => {
    console.log(`${payload.data.command}`);
    RCONClient.send(`${payload.data.command}`);
  });

  socket.on('error', (err) => {
    console.error(chalk.red(err.message));
  });
});

createGameStream = (id) => {
  if (gameStreams[id]) {
    gameStreams[id].connected++;
    return gameStreams[id];
  }
  gameStreams[id] = {
    ws: wsClient,
    connected: 1,
  };
};

endGameStream = (id) => {
  if (gameStreams[id]) {
    gameStreams[id].connected--;
    if (gameStreams[id].connected < 1) {
      console.log(`Client ${id} disconnected`);
      gameStreams[id].ws.close();
      delete gameStreams[id];
    }
  }
};

let wsClient;
const initWsClient = () => {
  wsClient = new WebSocket(rlHost);
  wsClient.onclose = () => {
    setTimeout(() => {
      console.error('Rocket League WebSocket Server Closed!');
      console.log('Attempting reconnection...');
      initWsClient();
    }, 10000);
  };

  wsClient.onopen = function open() {
    console.log(
      `Connected to ${chalk.yellow('Rocket League')} on ${chalk.blue(rlHost)}`
    );
  };

  wsClient.onmessage = (message) => {
    let data = JSON.parse(message.data);
    io.in('game').emit('update', data);
  };

  wsClient.onerror = (err) => {
    console.error(
      chalk.red(
        'Error connecting to SOS, is the plugin running? Try plugin load SOS from BakkesMod console to be sure'
      )
    );
    wsClient.close();
  };

  wsClient.on('error', (err) => {
    console.error(chalk.red(err.message));
    wsClient.close();
  });
};
initWsClient();

let RCONClient;
const initRCONClient = () => {
  RCONClient = new WebSocket(RCONHost);
  RCONClient.onclose = () => {
    setTimeout(() => {
      console.error('Rocket League RCON connection Closed!');
      console.log('Attempting reconnection...');
      initRCONClient();
    }, 10000);
  };

  RCONClient.onopen = function open() {
    console.log(
      `Connected to ${chalk.yellow('RCON')} on ${chalk.blue(RCONHost)}`
    );
    RCONClient.send(`rcon_password ${process.env.RCONPASS}`);
    RCONClient.send('rcon_refresh_allowed');
  };

  RCONClient.onmessage = (message) => {
    console.log(message.data);
  };

  RCONClient.onerror = (err) => {
    console.error(chalk.red('Error connecting to RCON!'));
    RCONClient.close();
  };

  RCONClient.on('error', (err) => {
    console.error(chalk.red(err.message));
    RCONClient.close;
  });
};
initRCONClient();

// Declare this socket outside of function body to allow other functions to emit messages
const rlsocket = io_client(`ws://localhost:${port}`);

// teams array, store colours, team names, score, etc.
let teams = [{}, {}];
teams[0].color = [0, 0, 255, 255];
teams[0].name = null;
teams[0].score = 0;
teams[1].color = [255, 35, 0, 255];
teams[1].name = null;
teams[1].score = 0;

// player data
let players = null;

// Connect back to the SOS relay on this server to receive Rocket League game data, etc.
const rocketLeague = () => {
  rlsocket.emit('join', 'NODE-BACKEND');
  rlsocket.emit('watchGame');

  // Logic for each game tick update event
  rlsocket.on('update', (data) => {
    let event = data.event;
    let stats = data.data;

    /* Logic for 'game:update_state' events, this will contain all the game data, such as time, team numbers/names, player data,
    score, statistics, etc etc. */
    if (event == 'game:update_state') {
      players = stats['players'];
      teams[0].color = stats.game.teams[0]?.color_primary;
      teams[0].name = stats.game.teams[0].name;
      teams[0].score = stats.game.teams[0].score;
      teams[1].color = stats.game.teams[0]?.color_primary;
      teams[1].name = stats.game.teams[1].name;
      teams[1].score = stats.game.teams[1].score;
    }

    // do things with goal scored events
    if (event == 'game:goal_scored') {
      console.log(stats);
      // put code here
    }

    // do things with match ended/created event
    if (
      event == 'game:match_destroyed' ||
      event == 'game:match_ended' ||
      event == 'game:match_created'
    ) {
      // put code here
    }

    // do things with statfeed events
    if (event == 'game:statfeed_event') {
      console.log(stats);
      // put code here
    }
  });
};

// Initialise websocket connection
rocketLeague();

// Socket IO admin board
instrument(io, { auth: false });

// Kill server, make sure NGROK shuts down on SIGINT
process.on('SIGINT', async function () {
  console.log(chalk.yellow('Server shutting down'));
  process.exit();
});
