import { gameOver } from "./game.js";

let inputDirection = { x: 0, y: 0 };
let lastInputDirection;

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            if (lastInputDirection.x === 0) {
                inputDirection = { x: -1, y: 0 };
            }
            break;
        case "ArrowUp":
            if (lastInputDirection.y === 0) {
                inputDirection = { x: 0, y: -1 };
            }
            break;
        case "ArrowRight":
            if (lastInputDirection.x === 0) {
                inputDirection = { x: 1, y: 0 };
            }
            break;
        case "ArrowDown":
            if (lastInputDirection.y === 0) {
                inputDirection = { x: 0, y: 1 };
            }
            break;
    }
    let arrowKeys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];
    if(arrowKeys.includes(e.key) && !gameOver) {
        e.stopPropagation();
        e.preventDefault();
    }
}, true);

export function getInputdirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

export function setInputDirection(newDirection){
    inputDirection = newDirection;
}