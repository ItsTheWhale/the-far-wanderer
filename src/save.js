import { gameDefaults } from "./settings.js";
export function saveGame(game) {
    window.localStorage.setItem("game", JSON.stringify(game));
}
export function loadGame() {
    var _a;
    return ((_a = JSON.parse(window.localStorage.getItem("game") || "{}")) !== null && _a !== void 0 ? _a : structuredClone(gameDefaults));
}
export function exportGame(game) {
}
