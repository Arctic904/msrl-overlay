import socketIOClient from 'socket.io-client';

let socket;
export const createPanelConnection = () => {
    socket = socketIOClient('http://localhost:6969', {
        withCredentials: true,
    });
    socket.on("connect", () => {
        socket.emit("Control Panel Connected");
        socket.emit('watchGame');
    });
    socket.on('update', (update) => {
        if (update.event === "game:initialized") {
            console.log(update);
            updateScreen();
        }
    })
}

export const updateScreen = () => {
    let data = {
        data: {
            event: "ctrl_update",
            contents: {
                seriesLength: document.getElementById("series-length").value,
                blueScore: parseInt(document.getElementById("blueWins").value),
                orngScore: parseInt(document.getElementById("orngWins").value),
                // orngColor: document.getElementById("orng-color").value,
                // blueColor: document.getElementById("blue-color").value,
                orngName: document.getElementById("orng-name").value,
                blueName: document.getElementById("blue-name").value,
            },
        },
    };
    //data = JSON.parse(data);
    console.log(data);
    socket.emit("payload", data);
}