export class ConnectFour {
  constructor() {
    this.gameBoard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ];
    this.currentPlayer = 1;
  }

  dropDisc(index) {
    // Needs to check the arrays at same index to see how low it can be dropped

    for (let i = 0; i < 6; i++) {
      if (this.gameBoard[0][index] === "") {
      }
    }
  }

  checkForFourInARow() {
    // This method should be called inside of dropDisc()
  }
}
