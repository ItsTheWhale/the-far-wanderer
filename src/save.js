import { gameDefaults } from "./settings.js";
export function saveGame(game) {
    window.localStorage.setItem("game", JSON.stringify(game));
}
export function loadGame() {
    var _a, _b;
    return ((_b = JSON.parse((_a = window.localStorage.getItem("game")) !== null && _a !== void 0 ? _a : "{}")) !== null && _b !== void 0 ? _b : structuredClone(gameDefaults));
}
export function exportGame(game) {
}
