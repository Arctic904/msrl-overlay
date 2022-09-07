# Rocket League socket.io server

## NGROK / Express static server version available in NGROK branch

Connects to SOS / RCON sockets in BakkesMod plugin.  

18/02/22 - merged commit from @ArcticFire19, RCONPASS is now auto populated from bakkes config file.

_node v14+ required, using optional chaining_

- Clone the repo, then run 'npm install'

- Edit the .env file, CORS origins are specified as comma delimited strings, enter your RLHOST and RCONHOST addresses
  e.g:  
  CORS = 'http://10.0.0.60:3000, http://localhost:3000'
  RLHOST = 'http://localhost:49122'
  RCONHOST = 'http://localhost:9002'

- Value required for RCONPASS can be found by opening BakkesMod, going to File -> Open BakkesMod Folder, then opening cfg folder, and searching config.cfg for "rcon_password"

- Start server with 'npm start'

To implement in a standard HTML page, source the socket.io client from CDN,  
check at https://cdnjs.com/libraries/socket.io for current links, then import via script tag:

```html
<head>
  <!-- other script tags, etc -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.3/socket.io.min.js"></script>
  <!-- other script tags, etc -->
</head>

<body>
  <script>
    const socket = io('http://localhost:6969', {
      withCredentials: true,
    });
    socket.on('connect', () => {
      // emit join message to socket with client ID
      socket.emit('join', 'FRONTEND');
      /* emit watchGame message to socket, required for backend server to
      create and destroy stream on per client ID basis */
      socket.emit('watchGame');
    });
    // on socket message 'update', run logic on that data
    socket.on('update', (update) => {
      // run socket logic here, e.g:
      if (update.event === 'game:update_state') {
        //do stuff with update
        console.log(update.data);
        //etc
      }
    });
  </script>
</body>
```

To implement in your app using a framework, e.g. React/Vue/Angular/Svelte etc,  
connect back to the server with a new socket.io client  
e.g:

```js
import socketIOClient from 'socket.io-client';

// instantiate socketIOClient connection to localhost
const socket = socketIOClient('http://localhost:6969', {
  withCredentials: true,
});
socket.on('connect', () => {
  // emit join message to socket with client ID
  socket.emit('join', 'FRONTEND');
  /* emit watchGame message to socket, required for backend server to
  create and destroy stream on per client ID basis */
  socket.emit('watchGame');
})
// on socket message 'update', run logic on that data
socket.on('update', (update) => {
  // run socket logic here, e.g:
  if (update.event === 'game:update_state') {
    // do stuff with update
    console.log(update.data)
    //etc
  }
}
```

For RCON usage, firstly, check under AppData\Roaming\bakkesmod\bakkesmod\bakkesmodsdk\bakkes_patchplugin.py
for an example showing how bakkesmod uses the socket to install a new plugin.

Any commands you wish to use through RCON connection, must be added to the allowed commands file under:  
AppData\Roaming\bakkesmod\bakkesmod\data\rcon_commands.cfg

example for RCON commands:

```js
function rconSend(command) {
  socket.emit('RCON', {
    data: {
      command: command,
    },
  });
}

/* this example will send every time, personally, I update a state value on first fire
and have code to check if that value is true or not, which I clear at the end of the match
so that it only fires on the first time this event occurs */

if (update.event === 'game:post_countdown_begin') {
  rconSend('rcon_refresh_allowed');
  rconSend('replay_gui hud 1');
  rconSend('replay_gui matchinfo 1');
  /* 
  adjust this setTimeout to a higher value if command not received or glitchy. 
  100ms works fine for me and results in not seeing the spectator hud/clock/etc at all
  but may be dependent on network connection and require higher value, any lower = fail for me.
  */
  setTimeout(() => {
    rconSend('replay_gui hud 0');
    rconSend('replay_gui matchinfo 0');
  }, 100);
}
```
