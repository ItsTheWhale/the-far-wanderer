import { gameDefaults } from "./settings.js";
export function saveGame(game) {
    window.localStorage.setItem("game", JSON.stringify(game));
}
export function loadGame() {
    return (JSON.parse(window.localStorage.getItem("game") || "{}") ?? structuredClone(gameDefaults));
}
export function exportGame(game) {
    const exportElem = document.createElement("a");
    exportElem.setAttribute("download", "thefarwanderersave" + Date.now() + ".json");
    exportElem.setAttribute("href", "data:application/json," + JSON.stringify(game));
    exportElem.dispatchEvent(new MouseEvent("click"));
}
