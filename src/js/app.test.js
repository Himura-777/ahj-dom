import Game from './game';

describe('Game', () => {
  let game;

  beforeAll(() => {
    document.body.innerHTML = `
      <div class="game-container">
        <div class="game-board" id="gameBoard"></div>
      </div>
    `;
  });

  beforeEach(() => {
    game = new Game();
  });

  afterEach(() => {
    if (game.gameInterval) {
      clearInterval(game.gameInterval);
    }
  });

  test('should initialize', () => {
    expect(game).toBeInstanceOf(Game);
    expect(game.field).toBeDefined();
    expect(game.score).toBeDefined();
    expect(game.goblin).toBeDefined();
  });

  test('should start game', () => {
    game.start();
    expect(game.gameInterval).toBeDefined();
  });
});
