let grid: string[][] = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ']
];


let currentPlayer: string = 'X';

function playTurn(col: number): void {
  for (let row = 5; row >= 0; row--) {
    if (grid[row][col] === ' ') {
      grid[row][col] = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      break;
    }
  }
}

function isColumnFull(col: number): boolean {
  return grid[0][col] !== ' ';
}

function checkVictory(): boolean {
  // Vérification lignes
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      let val = grid[r][c];
      if (val !== ' ' && val === grid[r][c+1] && val === grid[r][c+2] && val === grid[r][c+3]) {
        return true;
      }
    }
  }
  return false;
}

