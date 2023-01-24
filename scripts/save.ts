import { gameDefaults, gameStruct } from "./settings.js";

export function saveGame(game: gameStruct): void {
    window.localStorage.setItem("game", JSON.stringify(game));
}

export function loadGame(): gameStruct {
    return (window.localStorage.getItem("game") ?? gameDefaults) as gameStruct;
}

export function exportGame(game: gameStruct): void {

}