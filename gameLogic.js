

export function isGameOver(arr) {
  // Check rows
  for (let i = 0; i < 6; i++) {
    if (
      arr[i][0] !== null &&
      arr[i][0] === arr[i][1] &&
      arr[i][1] === arr[i][2] &&
      arr[i][2] === arr[i][3] &&
      arr[i][3] === arr[i][4]
    ) {
      return true;
    }
  }

  // Check columns
  for (let j = 0; j < 6; j++) {
    if (
      arr[0][j] !== null &&
      arr[0][j] === arr[1][j] &&
      arr[1][j] === arr[2][j] &&
      arr[2][j] === arr[3][j] &&
      arr[3][j] === arr[4][j]
    ) {
      return true;
    }
  }

  // Check main diagonal
  if (
    arr[0][0] !== null &&
    arr[0][0] === arr[1][1] &&
    arr[1][1] === arr[2][2] &&
    arr[2][2] === arr[3][3] &&
    arr[3][3] === arr[4][4]
  ) {
    return true;
  }

  // Check anti-diagonal
  if (
    arr[0][5] !== null &&
    arr[0][5] === arr[1][4] &&
    arr[1][4] === arr[2][3] &&
    arr[2][3] === arr[3][2] &&
    arr[3][2] === arr[4][1]
  ) {
    return true;
  }

  // No winner found, game is not over
  return false;
}

export function setGameBoard(row, column, value) {
  // Set the value in the game board at the determined position
  
  console.log(gameBoard);
  if (isGameOver(gameBoard)) {
    console.log("Game Over");
  }
}
