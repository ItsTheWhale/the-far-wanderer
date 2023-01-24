import { gameDefaults } from "./settings.js";
export function saveGame(game) {
    window.localStorage.setItem("game", JSON.stringify(game));
}
export function loadGame() {
    var _a;
    return ((_a = window.localStorage.getItem("game")) !== null && _a !== void 0 ? _a : gameDefaults);
}
export function exportGame(game) {
}
