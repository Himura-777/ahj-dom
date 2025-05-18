import Game from './game';

describe('Game', () => {
  let game;

  beforeAll(() => {
    // Создаем минимальный DOM для тестов
    document.body.innerHTML = `
      <div class="game-container">
        <div class="game-board" id="gameBoard"></div>
      </div>
    `;
  });

  beforeEach(() => {
    game = new Game();
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

    // Очищаем интервал после теста
    clearInterval(game.gameInterval);
  });
});