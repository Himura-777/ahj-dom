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
  }

  start() {
    this.field.draw();
    this.score.draw();
    this.gameInterval = setInterval(() => this.moveGoblin(), 1000);
  }

  moveGoblin() {
    if (this.misses >= this.maxMisses) {
      this.endGame();
      return;
    }

    const newPosition = this.field.getRandomPosition();
    if (newPosition === this.currentPosition) {
      this.moveGoblin();
      return;
    }

    this.currentPosition = newPosition;
    this.goblin.show(this.currentPosition);
    this.misses++;
    this.score.updateMisses(this.misses);
  }

  hitGoblin(position) {
    if (position === this.currentPosition && this.currentPosition !== null) {
      this.goblin.hide();
      this.score.increase();
      this.misses = Math.max(0, this.misses - 1);
      this.score.updateMisses(this.misses);
      this.currentPosition = null;
    }
  }

  endGame() {
    clearInterval(this.gameInterval);
    alert(`Game over! Your score: ${this.score.points}`);
  }
}
