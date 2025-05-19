import goblinImg from '../img/goblin.png';

export default class Goblin {
  constructor() {
    this.goblinElement = document.createElement('img');
    this.goblinElement.src = goblinImg;
    this.goblinElement.className = 'goblin';
    this.goblinElement.style.display = 'none';
    document.body.appendChild(this.goblinElement);
  }

  show(position) {
    position.append(this.goblinElement);
    this.goblinElement.style.display = 'block';
  }

  hide() {
    this.goblinElement.style.display = 'none';
  }
}
