export default class Score {
  constructor(game) {
    this.game = game;
    this.element = document.createElement('div');
    this.element.className = 'score';
    document.querySelector('.game-container').prepend(this.element);
    this.update();
  }

  update() {
    this.element.textContent =
        `Попадания: ${this.game.points} | Промахи: ${this.game.misses}/5`;

    if (this.game.misses >= 5) {
      this.element.style.color = 'red';
    } else {
      this.element.style.color = 'black';
    }
  }
}
