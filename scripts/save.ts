import { game, gameStruct } from "./settings.js";

export function saveGame(game: gameStruct): void {
    window.localStorage.setItem("game", JSON.stringify(game));
}

export function loadGame(): gameStruct {
    return (window.localStorage.getItem("game") ?? game) as gameStruct;
}

export function exportGame(game: gameStruct): void {

}