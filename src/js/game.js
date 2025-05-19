import Goblin from './goblin.js';
import Field from './field.js';
import Score from './score.js';

export default class Game {
  constructor() {
    this.field = new Field(this);
    this.score = new Score(this);
    this.goblin = new Goblin();
    this.misses = 0;
    this.maxMisses = 5;
    this.currentPosition = null;
    this.gameInterval = null;
    this.currentTimeout = null;
    this.isGameActive = true;
  }

  start() {
    this.isGameActive = true;
    this.field.draw();
    this.score.draw();
    this.gameInterval = setInterval(() => this.moveGoblin(), 1000);
  }

  moveGoblin() {
    if (!this.isGameActive) return;

    const newPosition = this.field.getRandomPosition();
    if (newPosition === null || newPosition === this.currentPosition) return;

    if (this.currentPosition) {
      this.misses++;
      this.score.updateMisses(this.misses);
    }

    this.currentPosition = newPosition;
    this.goblin.show(newPosition);

    this.currentTimeout = setTimeout(() => {
      if (this.currentPosition && this.isGameActive) {
        this.misses++;
        this.score.updateMisses(this.misses);
        this.goblin.hide();
        this.currentPosition = null;

        if (this.misses >= this.maxMisses) {
          this.endGame();
        }
      }
    }, 1000);
  }

  hitGoblin(position) {
    if (!this.isGameActive) return;

    if (this.currentPosition && position === this.currentPosition) {
      clearTimeout(this.currentTimeout);
      this.goblin.hide();
      this.score.increase();
      this.currentPosition = null;
    } else {
      this.misses++;
      this.score.updateMisses(this.misses);

      if (this.misses >= this.maxMisses) {
        this.endGame();
      }
    }
  }

  endGame() {
    this.isGameActive = false;
    clearInterval(this.gameInterval);
    clearTimeout(this.currentTimeout);

    setTimeout(() => {
      if (confirm(`Игра окончена! Счет: ${this.score.points}\nНачать заново?`)) {
        this.restart();
      }
    }, 100);
  }

  restart() {
    this.field.clear();
    this.misses = 0;
    this.score.reset();
    this.currentPosition = null;
    this.start();
  }
}
