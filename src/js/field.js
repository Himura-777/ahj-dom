export default class Field {
  constructor(game) {
    this.game = game;
    this.board = document.getElementById('gameBoard');
    this.cells = [];
    this.lastPosition = null;
  }

  draw() {
    this.board.innerHTML = '';
    this.cells = [];

    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i;
      cell.addEventListener('click', () => this.game.hitGoblin(cell));
      this.cells.push(cell);
      this.board.append(cell);
    }
  }

  getRandomPosition() {
    if (this.cells.length === 0) return null;

    let availableCells = this.cells;
    if (this.lastPosition) {
      availableCells = this.cells.filter(cell => cell !== this.lastPosition);
    }

    if (availableCells.length === 0) availableCells = this.cells;

    const randomIndex = Math.floor(Math.random() * availableCells.length);
    this.lastPosition = availableCells[randomIndex];

    return this.lastPosition;
  }
}