import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Game from './game.js';

const game = new Game();
game.start();

export { game };