import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
	const game = new Game();
	game.start();
});