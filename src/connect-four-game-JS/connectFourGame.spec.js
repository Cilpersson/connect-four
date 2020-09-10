import { ConnectFour } from "./connectFourGame";

let game;

beforeEach(() => {
  game = new ConnectFour();
});

describe("Player one drops a disc in the middle", () => {
  it("should result in three empty arrays, one array with one disc and three more empty arrays", () => {
    game.dropDisc(1, 3);
    expect(game.gameBoard).toEqual([[], [], [], [1], [], [], []]);
  });
});

describe("Player two drops their disk to left of player one", () => {
  it("should result in two empty arrays, two arrays with one disc each and three more empty arrays", () => {
    game.dropDisc(1, 3);
    game.dropDisc(-1, 2);
    expect(game.gameBoard).toEqual([[], [], [-1], [1], [], [], []]);
  });
});

describe("You should not be able to add more than six discs to one row", () => {
  it("should only be six discs in the row even if more than that has been dropped", () => {
    game.dropDisc(1, 3);
    game.dropDisc(-1, 3);
    game.dropDisc(1, 3);
    game.dropDisc(-1, 3);
    game.dropDisc(1, 3);
    game.dropDisc(-1, 3);
    game.dropDisc(1, 3);

    expect(game.gameBoard).toEqual([
      [],
      [],
      [],
      [1, -1, 1, -1, 1, -1],
      [],
      [],
      [],
    ]);
  });
});

describe("For discs from the same player in a vertical line results in winning the game", () => {
  it("should return true if player one puts for discs on top of each other", () => {
    game.dropDisc(1, 3);
    game.dropDisc(1, 3);
    game.dropDisc(1, 3);
    game.dropDisc(1, 3);
    expect(game.isFourInARowVertical(1, 3)).toEqual(true);
  });
});

describe("Four discs from the same player in a vertical line should not result in winning game if the other player has a disc inbetween", () => {
  it("should return true if player one puts for discs on top of each other", () => {
    game.dropDisc(1, 3);
    game.dropDisc(1, 3);
    game.dropDisc(-1, 3);
    game.dropDisc(1, 3);
    game.dropDisc(1, 3);
    expect(game.isFourInARowVertical(1, 3)).toEqual(false);
  });
});

describe("A disc should not be able to be placed after a player has won", () => {
  it("should ", () => {
    game.dropDisc(1, 3);
    game.dropDisc(1, 3);
    game.dropDisc(1, 3);
    game.dropDisc(1, 3);
    game.dropDisc(1, 3);
    expect(game.gameBoard).toEqual([[], [], [], [1, 1, 1, 1], [], [], []]);
  });
});

describe("For discs from the same player in a horizontal line results in winning the game", () => {
  it("should return true if player one puts for discs on next to each other", () => {
    game.dropDisc(1, 1);
    game.dropDisc(1, 2);
    game.dropDisc(1, 3);
    game.dropDisc(1, 4);
    expect(game.isFourInARowHorizontal(1, 0)).toEqual(true);
  });
});

describe("For discs from the same player in a diagonal line results in winning the game", () => {
  it("should return true if player one puts for discs diagonally next to each other", () => {
    game.gameBoard = [[-1, -1, -1, 1], [-1, -1, 1], [-1, 1], [1], [], [], []];
    expect(game.isFourInARowDiagonal(1, 1, 2)).toEqual(true);
  });
});
/*
verticalIndex = 0
horizontalIndex = 3
topMostIndex = 5
*/
