// index.js
import { setGameBoard, isGameOver } from "./gameLogic.js";

let table = document.querySelector(".table");
let turn = 0;
let player01 = 0;
let player02 = 0;
export let gameBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];
table.addEventListener("click", (e) => {
  if (e.target.localName === "td") {
    const row = e.target.parentElement.rowIndex; // Get row index
    const column = e.target.cellIndex; // Get column index

    if (turn === 0 && e.target.id !== "blue") {
      e.target.id = "red";
      turn = 1;
    } else if (turn === 1 && e.target.id !== "red") {
      e.target.id = "blue";
      turn = 0;
    }

    gameBoard[row][column] = e.target.id;
    console.log(gameBoard);
    
    if (isGameOver(gameBoard)) {
      gameBoard = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ];
      if (turn == 1) {
        player01 += 1;
      } else {
        player02 += 1;
      }
    }
  }
});
