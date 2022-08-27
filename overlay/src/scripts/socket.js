import socketIOClient from 'socket.io-client';
import { writable } from "svelte/store"

export let data = writable(null);

export const createSocketConnection = () => {
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
        //etc

        let players = update.data.players;

        let orangePlayers = [];
        let bluePlayers = [];

        Object.keys(players).map(id => {
            // Team 1 orange - Team 0 Blue
            if (players[id].team == 0){
                if(players[id].name.length > 12){
                    let shorten = players[id].name.split("").slice(0,12); // Splits into characters array and grabs first 12 characters adding a ...
                    shorten.push("...")
                    players[id].name = shorten.join("");
                }
                bluePlayers.push(players[id]);
            }
            if (players[id].team == 1){
                if(players[id].name.length > 12){
                    let shorten = players[id].name.split("").slice(0,12); // Splits into characters array and grabs first 12 characters adding a ...
                    shorten.push("...")
                    players[id].name = shorten.join("");
                }
                orangePlayers.push(players[id]);
            }
        })

        let playerData = {
            blueTeam: bluePlayers,
            orangeTeam: orangePlayers
        }

        let targetData = update.data.players[update.data.game.target]

        let sendData = {
            fullData: update,
            players: playerData,
            target: targetData,
            teams: update.data.game.teams,
            game: update.data.game
        }
        data.set(sendData);

    }
    })
}
