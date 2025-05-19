export default class Field {
  constructor(game) {
    this.game = game;
    this.board = document.getElementById('gameBoard');
    this.cells = [];
    this.createField();
  }

  clear() {
    this.board.innerHTML = '';
    this.cells = [];
    this.createField();
  }

  createField() {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i.toString();
      this.cells.push(cell);
      this.board.appendChild(cell);
    }
  }

  getRandomPosition() {
    if (this.cells.length <= 1) return null;

    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * this.cells.length);
    } while (newPosition === this.lastPosition && this.cells.length > 1);

    this.lastPosition = newPosition;
    return this.cells[newPosition];
  }

  draw() {
    this.cells.forEach(cell => {
      cell.addEventListener('click', () => {
        this.game.hitGoblin(cell);
      });
    });
  }
}
