/*
  Description:
  The Renderer is responsible for drawing different aspects of the
  application. This is used to seperate the P5.js code from generic JavaScript
  code.
*/

function Renderer() {
  this.canvas = document.getElementById("canvas");
  this.context = canvas.getContext("2d");

  // Draws the chess board
  this.displayBoard = (board) => {
    let size = board.getSize();
    let cellSize = board.getCellSize();
    let switchColor = true;

    for (let row = 0; row < size; row++) {
      switchColor = !switchColor;
      for (let col = 0; col < size; col++) {
        if (switchColor) {
          this.context.fillStyle = `rgb(
            ${COLOR_THEME.CELL1.R},
            ${COLOR_THEME.CELL1.G},
            ${COLOR_THEME.CELL1.B},
            0.3
          )`;
          switchColor = !switchColor;
        }
        else {
          this.context.fillStyle = `rgb(
            ${COLOR_THEME.CELL2.R},
            ${COLOR_THEME.CELL2.G},
            ${COLOR_THEME.CELL2.B},
            0.3
          )`;
          switchColor = !switchColor;
        }

        this.context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  };

  // Draws the current boards chess pieces state
  this.displayPieces = (board) => {
    let state = board.getState();
    let size = board.getSize();
    let cellSize = board.getCellSize();


    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (state[row][col] != null) {
          // TODO: render chess piece images
          if (state[row][col].color === CHESS_COLORS.WHITE) {
            this.context.fillStyle = 'white';
          }
          else {
            this.context.fillStyle = 'black';
          }
          this.context.font = '50px Arial';
          this.context.fillText(state[row][col].icon, col * cellSize + 16, row * cellSize + 53);
        }
      }
    }
  };

  // Highlights squares on the board from the `squares` parameter which is
  // in the format { row: Integer, col: Integer } and colors in those squares
  // which is determined by the color parameter
  this.highlightSquares = (board, squares, color) => {
    let cellSize = board.getCellSize();

    this.context.fillStyle = `rgb(
      ${color.R},
      ${color.G},
      ${color.B}
    )`;
    squares.forEach(square => {
      this.context.fillRect(square.col * cellSize, square.row * cellSize, cellSize, cellSize);
    });
  }

  // Clears canvas
  this.clearBoard = () => {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
  }

  this.update = (board, inputHandler) => {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.displayBoard(board);

    if (inputHandler.selected) {
      let moveableSquares = inputHandler.selectedItem.item.moveableSquares(
        inputHandler.selectedItem.row,
        inputHandler.selectedItem.col,
        board
      );

      let attackableSquares = inputHandler.selectedItem.item.attackableSquares(
        inputHandler.selectedItem.row,
        inputHandler.selectedItem.col,
        board
      );

      this.highlightSquares(board, moveableSquares, COLOR_THEME.MOVEABLE_CELL);
      this.highlightSquares(board, attackableSquares, COLOR_THEME.ATTACKABLE_CELL);
    }

    this.displayPieces(board);
  }
}
