import Goblin from './goblin.js';
import Field from './field.js';
import Score from './score.js';

export default class Game {
  constructor() {
    this.field = new Field(this);
    this.goblin = new Goblin();
    this.score = new Score(this);
    this.misses = 0;
    this.points = 0;
    this.currentPosition = null;
    this.gameInterval = null;
    this.isGameActive = false;
  }

  start() {
    this.resetGame();
    this.field.draw();
    this.score.update();
    this.isGameActive = true;
    this.gameInterval = setInterval(() => this.moveGoblin(), 1000);
  }

  resetGame() {
    this.misses = 0;
    this.points = 0;
    this.currentPosition = null;
    clearInterval(this.gameInterval);
  }

  moveGoblin() {
    if (!this.isGameActive) return;

    // Убираем предыдущего гоблина
    if (this.currentPosition) {
      this.goblin.hide();
      this.misses++;
      this.score.update();

      if (this.misses >= 5) {
        this.endGame();
        return;
      }
    }

    // Показываем нового гоблина
    const newPosition = this.field.getRandomPosition();
    if (!newPosition) return;

    this.currentPosition = newPosition;
    this.goblin.show(newPosition);
  }

  hitGoblin(position) {
    if (!this.isGameActive || !this.currentPosition) return;

    if (position === this.currentPosition) {
      this.goblin.hide();
      this.points++;
      this.currentPosition = null;
      this.score.update();
    } else {
      this.misses++;
      this.score.update();

      if (this.misses >= 5) {
        this.endGame();
      }
    }
  }

  endGame() {
    this.isGameActive = false;
    clearInterval(this.gameInterval);

    setTimeout(() => {
      if (confirm(`Игра окончена! Счет: ${this.points}\nНачать заново?`)) {
        this.start();
      }
    }, 100);
  }
}