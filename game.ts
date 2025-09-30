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
