import { gameDefaults, gameStruct } from "./settings.js";

export function saveGame(game: gameStruct): void {
    window.localStorage.setItem("game", JSON.stringify(game));
}

export function loadGame(): gameStruct {
    return (JSON.parse(window.localStorage.getItem("game") || "{}") ?? structuredClone(gameDefaults)) as gameStruct;
}

export function exportGame(game: gameStruct): void {
    const exportElem = document.createElement("a");
    exportElem.setAttribute("download", "thefarwanderersave" + Date.now() + ".json");
    exportElem.setAttribute("href", "data:application/json," + JSON.stringify(game));
    exportElem.dispatchEvent(new MouseEvent("click"));
}