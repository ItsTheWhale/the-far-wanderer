import { gameDefaults } from "./settings.js";
export function saveGame(game) {
    window.localStorage.setItem("game", JSON.stringify(game));
}
export function loadGame() {
    return (JSON.parse(window.localStorage.getItem("game") || "{}") ?? structuredClone(gameDefaults));
}
export function exportGame(game) {
}
