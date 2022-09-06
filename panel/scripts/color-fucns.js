export function bluecolor() {
    document.getElementById("blue-color-picker").value =
        hexextend(document.getElementById("blue-color").value);
}

export function orangecolor() {
    document.getElementById("orng-color-picker").value =
        hexextend(document.getElementById("orng-color").value);
}

export function bluecolortobox() {
    document.getElementById("blue-color").value =
        hexextend(document.getElementById("blue-color-picker").value);
}

export function orangecolortobox() {
    document.getElementById("orng-color").value =
        hexextend(document.getElementById("orng-color-picker").value);
}

export function bluecolor2() {
    document.getElementById("blue-color-picker-2").value =
        hexextend(document.getElementById("blue-color-2").value);
}

export function orangecolor2() {
    document.getElementById("orng-color-picker-2").value =
        hexextend(document.getElementById("orng-color-2").value);
}

export function bluecolortobox2() {
    document.getElementById("blue-color-2").value =
        hexextend(document.getElementById("blue-color-picker-2").value);
}

export function orangecolortobox2() {
    document.getElementById("orng-color-2").value =
        hexextend(document.getElementById("orng-color-picker-2").value);
}

export function bluetextcolor() {
    document.getElementById("blue-text-color-picker").value =
        hexextend(document.getElementById("blue-text-color").value);
}

export function orangetextcolor() {
    document.getElementById("orng-text-color-picker").value =
        hexextend(document.getElementById("orng-text-color").value);
}

export function bluetextcolortobox() {
    document.getElementById("blue-text-color").value =
        hexextend(document.getElementById("blue-text-color-picker").value);
}

export function orangetextcolortobox() {
    document.getElementById("orng-text-color").value =
        hexextend(document.getElementById("orng-text-color-picker").value);
}

function hexextend(hex) {
    if (hex[0] === "#") {
        hex = hex.substring(1)
    }
    if (hex.length === 3) {
        return "#" + hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    } else {
        return '#' + hex
    }
}