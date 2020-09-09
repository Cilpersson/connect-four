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
    this.winner = 0;
  }

  dropDisc(currentPlayer, index) {
    if (this.gameBoard[index].length < 6) {
      this.gameBoard[index].push(currentPlayer);
    }

    //Every time a disc has been dropped check for winner should be called
    // checkForWinner(index)
  }

  checkForWinner() {
    if (this.isFourInARowDiagonal(player)) return true;
    if (this.isFourInARowVertical(player)) return true;
    if (this.isFourInARowHorizontal(player)) return true;
  }
  isFourInARowDiagonal(player) {}

  isFourInARowHorizontal(player) {}

  isFourInARowVertical(player, index) {
    let counter = 0;

    this.gameBoard[index].forEach((value) => {
      if (value === player) {
        counter++;
      } else {
        counter = 0;
      }
    });

    return counter >= 4;
  }
}
