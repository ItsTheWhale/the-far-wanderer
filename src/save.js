import { gameDefaults } from "./settings.js";
export function saveGame(game) {
    window.localStorage.setItem("game", JSON.stringify(game));
}
export function loadGame() {
    return (JSON.parse(window.localStorage.getItem("game") || "{}") ?? structuredClone(gameDefaults));
}
export async function importGame() {
    return new Promise((resolve, reject) => {
        const importElem = document.createElement("input");
        importElem.setAttribute("type", "file");
        importElem.setAttribute("accept", "application/json");
        importElem.dispatchEvent(new MouseEvent("click"));
        importElem.addEventListener("change", () => {
            // @ts-ignore
            const file = importElem.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.addEventListener("load", (event) => {
                    // @ts-ignore
                    resolve(JSON.parse(event.target.result) ?? structuredClone(gameDefaults));
                });
                reader.addEventListener("error", (event) => {
                    window.alert("Error loading file.");
                });
            }
        });
    });
}
export function exportGame(game) {
    const exportElem = document.createElement("a");
    exportElem.setAttribute("download", "thefarwanderersave" + Date.now() + ".json");
    exportElem.setAttribute("href", "data:application/json," + JSON.stringify(game));
    exportElem.dispatchEvent(new MouseEvent("click"));
}
