import Game from './game';

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test('should initialize', () => {
    expect(game).toBeInstanceOf(Game);
  });

  test('should start game', () => {
    game.start();
    expect(game.gameInterval).toBeDefined();
  });
});
