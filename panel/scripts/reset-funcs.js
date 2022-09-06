export function resetWins() {
    document.getElementById("orngWins").value = 0;
    document.getElementById("blueWins").value = 0;
}

export function resetLogos() {
    document.getElementById("orng-icon").value = "";
    document.getElementById("blue-icon").value = "";
}

export function resetColors() {
    document.getElementById("orng-color").value = "#000000";
    document.getElementById("orng-text-color").value = "#ffffff";
    document.getElementById("orng-color-2").value = "#ee8723";
    document.getElementById("blue-color").value = "#52acfe";
    document.getElementById("blue-text-color").value = "#ffffff";
    document.getElementById("blue-color-2").value = "#000000";
    document.getElementById("orng-color-picker").value = "#000000";
    document.getElementById("orng-text-color-picker").value = "#ffffff";
    document.getElementById("orng-color-picker-2").value = "#ee8723";
    document.getElementById("blue-color-picker").value = "#52acfe";
    document.getElementById("blue-text-color-picker").value = "#ffffff";
    document.getElementById("blue-color-picker-2").value = "#000000";
}