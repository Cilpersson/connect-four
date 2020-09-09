export class ConnectFour {
  constructor() {
    this.gameBoard = [[], [], [], [], [], [], []];
    this.currentPlayer = 1;
    this.winner = 0;
  }

  dropDisc(currentPlayer, verticalIndex) {
    if (this.gameBoard[verticalIndex].length < 6 && this.winner === 0) {
      this.gameBoard[verticalIndex].push(currentPlayer);
    }
    //Every time a disc has been dropped check for winner should be called
    let horizontalIndex = this.gameBoard[verticalIndex].length - 1;
    this.checkForWinner(currentPlayer, verticalIndex, horizontalIndex);
  }

  checkForWinner(player, verticalIndex, horizontalIndex) {
    if (
      this.isFourInARowVertical(player, verticalIndex) ||
      this.isFourInARowHorizontal(player, horizontalIndex) ||
      this.isFourInARowDiagonal(player, verticalIndex, horizontalIndex)
    ) {
      this.winner = player;
      return true;
    }
  }
  isFourInARowDiagonal(player, verticalIndex, horizontalIndex) {
    // METHOD 1 FIND TOP AND BOTTOM LEFT AND GO RIGHT DIAGONALLY
    // STEP 1: Define outer edge indexes and move from current place untill you hit the index
    // Remember top left and bottom left index
    // STEP 2: Start moving from top left diagonally down and count if 4 return true
    // STEP 3: Start moving from bottom left and count if 4 return true

    let leftMostIndex = 0;
    let bottomMostIndex = 0;
    let topMostIndex = 5;
    let rightMostIndex = 6;

    // IF VERTICAL INDEX > HORIZONTAL GO BACK HORIZONTAL INDEX
    // IF VERTICAL INDEX < HORIZONTAL GO BACK VERTICAL INDEX

    let downAndLeftSteps =
      verticalIndex >= horizontalIndex ? horizontalIndex : verticalIndex;

    let upAndLeftSteps =
      verticalIndex >= topMostIndex - horizontalIndex
        ? topMostIndex - horizontalIndex
        : verticalIndex;

    //METHOD 2 Move down left and top right from current untill you "Miss"
    // Remember count and add, if >= 4 return true
    //
  }

  isFourInARowHorizontal(player, horizontalIndex) {
    let counter = 0;
    let isFourInARow = false;

    this.gameBoard.forEach((arr) => {
      if (arr[horizontalIndex] === player) {
        counter++;
        // Counter can't be returned because it keeps counting after four in a row is found
        counter === 4 ? (isFourInARow = true) : (isFourInARow = false);
      } else {
        counter = 0;
      }
    });
    return isFourInARow;
  }

  isFourInARowVertical(player, verticalIndex) {
    let counter = 0;

    this.gameBoard[verticalIndex].forEach((value) => {
      if (value === player) {
        counter++;
      } else {
        counter = 0;
      }
    });

    return counter >= 4;
  }
}
