import './css/style.css';
import goblinImage from './img/goblin.png';

class Game {
  constructor() {
    this.board = document.getElementById('gameBoard');
    this.goblin = null;
    this.currentPosition = null;
    this.intervalId = null;
    this.init();
  }

  init() {
    this.createBoard();
    this.creategoblin();
    this.startGame();
  }

  createBoard() {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i;
      this.board.appendChild(cell);
    }
  }

  creategoblin() {
    this.goblin = document.createElement('img');
    this.goblin.src = goblinImage;
    this.goblin.className = 'goblin';
    this.placegoblinAtRandomPosition();
  }

  placegoblinAtRandomPosition() {
    const cells = document.querySelectorAll('.cell');
    let newPosition = Math.floor(Math.random() * 16);

    // Don't place in the same position
    if (this.currentPosition !== null) {
      while (newPosition === this.currentPosition) {
        newPosition = Math.floor(Math.random() * 16);
      }
    }

    this.currentPosition = newPosition;
    cells[newPosition].appendChild(this.goblin);
  }

  startGame() {
    this.intervalId = setInterval(() => {
      this.placegoblinAtRandomPosition();
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Game();
});