import Game from './game';

describe('Game', () => {
  test('should initialize', () => {
    const game = new Game();
    expect(game).toBeInstanceOf(Game);
  });
});