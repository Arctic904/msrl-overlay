import socketIOClient from 'socket.io-client';
import {writable} from "svelte/store";

export let fileList = writable(null)

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

export const updateSponsors = (idList) => {
    let sponsorList = []
    console.log(idList);
    idList.forEach((value) => {
        if (document.getElementById(`${value}-checkbox`).checked) {
            sponsorList.push(document.getElementById(`${value}-image`).src.replace("http://localhost:3001", '.'));
        }
    });
    let data = {
        data: {
            event: "update-sponsors",
            contents: {
                sponsors: sponsorList
            },
        },
    };
    console.log(data);
    socket.emit("payload", data);
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
export let downloadURL = () => {
    let data = {
        data: {
            event: "sponsor-download",
            contents: {
                url: document.getElementById("sponsor-url").value,
                name: document.getElementById("sponsor-name").value
            }
        }
    }
    console.log(data);
    socket.emit("payload", data);
}