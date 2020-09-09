export class ConnectFour {
  constructor() {
    this.gameBoard = [
      // ["", "", "", "", "", ""],
      // ["", "", "", "", "", ""],
      // ["", "", "", "", "", ""],
      // ["", "", "", "", "", ""],
      // ["", "", "", "", "", ""],
      // ["", "", "", "", "", ""],
      // ["", "", "", "", "", ""],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ];
    this.currentPlayer = 1;
  }

  dropDisc(currentPlayer, index) {
    this.gameBoard[index].push(currentPlayer);
    // Needs to check the arrays at same index to see how low it can be dropped
  }

  checkForFourInARow() {
    // This method should be called inside of dropDisc()
  }
}
