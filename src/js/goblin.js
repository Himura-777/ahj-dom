import goblinImg from '../img/goblin.png';

export default class Goblin {
  constructor() {
    this.element = document.createElement('img');
    this.element.src = goblinImg;
    this.element.className = 'goblin';
    this.element.style.display = 'none';
    document.body.append(this.element);
  }

  show(position) {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    position.append(this.element);
    this.element.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }
}