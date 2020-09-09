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
