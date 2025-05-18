export default class Score {
  constructor(game) {
    this.game = game;
    this.points = 0;
    this.scoreElement = document.createElement('div');
    this.scoreElement.className = 'score';
    document.querySelector('.game-container').prepend(this.scoreElement);
  }

  increase() {
    this.points++;
    this.update();
  }

  updateMisses(misses) {
    this.misses = misses;
    this.update();
  }

  update() {
    this.scoreElement.textContent =
			`Score: ${this.points} | Misses: ${this.game.misses}/${this.game.maxMisses}`;
  }

  draw() {
    this.update();
  }
}
