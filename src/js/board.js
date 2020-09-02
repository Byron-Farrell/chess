/*
  Description:
  Manages the state of the chess board
*/

function Board() {

  // Variables
  const SIZE = 8;
  const CELL_SIZE = 75;
  let turn = CHESS_COLORS.WHITE;
  // let state = [
  //   // ROW: 8
  //   [
  //     null,   // CELL: 6B
  //     ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.BLACK),  // CELL: 8C
  //     ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.BLACK),   // CELL: 8D
  //     null,   // CELL: 6C
  //     null,   // CELL: 6B
  //     null,   // CELL: 6C
  //     null,   // CELL: 6B
  //     null,   // CELL: 6C
  //   ],
  //   // ROW: 7
  //   [
  //     ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.WHITE),    // CELL: 7A
  //     null,   // CELL: 6B
  //     null,   // CELL: 6C
  //     null,   // CELL: 6D
  //     null,   // CELL: 6E
  //     null,   // CELL: 6F
  //     null,   // CELL: 6G
  //     null    // CELL: 6H
  //   ],
  //   // ROW: 6
  //   [
  //     null,   // CELL: 6A
  //     null,   // CELL: 6B
  //     null,   // CELL: 6C
  //     null,   // CELL: 6D
  //     null,   // CELL: 6E
  //     null,   // CELL: 6F
  //     null,   // CELL: 6G
  //     null    // CELL: 6H
  //   ],
  //   // ROW: 5
  //   [
  //     null,   // CELL: 5A
  //     null,   // CELL: 5B
  //     null,   // CELL: 5C
  //     null,   // CELL: 5D
  //     null,   // CELL: 5E
  //     null,   // CELL: 5F
  //     null,   // CELL: 5G
  //     null    // CELL: 5H
  //   ],
  //   // ROW: 4
  //   [
  //     null,   // CELL: 4A
  //     null,   // CELL: 4B
  //     ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.WHITE),
  //     null,   // CELL: 4D
  //     null,   // CELL: 4E
  //     null,   // CELL: 4F
  //     null,   // CELL: 4G
  //     null    // CELL: 4H
  //   ],
  //   // ROW: 3
  //   [
  //     null,   // CELL: 5A
  //     null,   // CELL: 5B
  //     null,   // CELL: 5C
  //     null,   // CELL: 5D
  //     null,   // CELL: 5E
  //     null,   // CELL: 5F
  //     null,   // CELL: 5G
  //     null    // CELL: 5H
  //   ],
  //   // ROW: 2
  //   [
  //     null,   // CELL: 5A
  //     null,   // CELL: 5B
  //     null,   // CELL: 5C
  //     null,   // CELL: 5D
  //     null,   // CELL: 5E
  //     null,   // CELL: 5F
  //     null,   // CELL: 5G
  //     null    // CELL: 5H
  //   ],
  //   // ROW: 1
  //   [
  //     null,   // CELL: 5A
  //     null,   // CELL: 5B
  //     null,   // CELL: 5C
  //     null,   // CELL: 5D
  //     null,   // CELL: 5E
  //     null,   // CELL: 5F
  //     null,   // CELL: 5G
  //     null    // CELL: 5H
  //   ]
  // ];

  let state = [
    // ROW: 8
    [
      ChessPieceFactory(CHESS_PIECES.ROOK, CHESS_COLORS.BLACK),    // CELL: 8A
      ChessPieceFactory(CHESS_PIECES.KNIGHT, CHESS_COLORS.BLACK),  // CELL: 8B
      ChessPieceFactory(CHESS_PIECES.BISHOP, CHESS_COLORS.BLACK),  // CELL: 8C
      ChessPieceFactory(CHESS_PIECES.QUEEN, CHESS_COLORS.BLACK),   // CELL: 8D
      ChessPieceFactory(CHESS_PIECES.KING, CHESS_COLORS.BLACK),    // CELL: 8E
      ChessPieceFactory(CHESS_PIECES.BISHOP, CHESS_COLORS.BLACK),  // CELL: 8F
      ChessPieceFactory(CHESS_PIECES.KNIGHT, CHESS_COLORS.BLACK),  // CELL: 8G
      ChessPieceFactory(CHESS_PIECES.ROOK, CHESS_COLORS.BLACK)     // CELL: 8H
    ],
    // ROW: 7
    [
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.BLACK),    // CELL: 7A
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.BLACK),    // CELL: 7B
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.BLACK),    // CELL: 7C
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.BLACK),    // CELL: 7D
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.BLACK),    // CELL: 7E
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.BLACK),    // CELL: 7F
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.BLACK),    // CELL: 7G
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.BLACK),    // CELL: 7H
    ],
    // ROW: 6
    [
      null,   // CELL: 6A
      null,   // CELL: 6B
      null,   // CELL: 6C
      null,   // CELL: 6D
      null,   // CELL: 6E
      null,   // CELL: 6F
      null,   // CELL: 6G
      null    // CELL: 6H
    ],
    // ROW: 5
    [
      null,   // CELL: 5A
      null,   // CELL: 5B
      null,   // CELL: 5C
      null,   // CELL: 5D
      null,   // CELL: 5E
      null,   // CELL: 5F
      null,   // CELL: 5G
      null    // CELL: 5H
    ],
    // ROW: 4
    [
      null,   // CELL: 4A
      null,   // CELL: 4B
      null,   // CELL: 4C
      null,   // CELL: 4D
      null,   // CELL: 4E
      null,   // CELL: 4F
      null,   // CELL: 4G
      null    // CELL: 4H
    ],
    // ROW: 3
    [
      null,   // CELL: 3A
      null,   // CELL: 3B
      null,   // CELL: 3C
      null,   // CELL: 3D
      null,   // CELL: 3E
      null,   // CELL: 3F
      null,   // CELL: 3G
      null    // CELL: 3H
    ],
    // ROW: 2
    [
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.WHITE),    // CELL: 2A
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.WHITE),    // CELL: 2B
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.WHITE),    // CELL: 2C
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.WHITE),    // CELL: 2D
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.WHITE),    // CELL: 2E
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.WHITE),    // CELL: 2F
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.WHITE),    // CELL: 2G
      ChessPieceFactory(CHESS_PIECES.PAWN, CHESS_COLORS.WHITE),    // CELL: 2H
    ],
    // ROW: 1
    [
      ChessPieceFactory(CHESS_PIECES.ROOK, CHESS_COLORS.WHITE),    // CELL: 1A
      ChessPieceFactory(CHESS_PIECES.KNIGHT, CHESS_COLORS.WHITE),  // CELL: 1B
      ChessPieceFactory(CHESS_PIECES.BISHOP, CHESS_COLORS.WHITE),  // CELL: 1C
      ChessPieceFactory(CHESS_PIECES.QUEEN, CHESS_COLORS.WHITE),   // CELL: 1D
      ChessPieceFactory(CHESS_PIECES.KING, CHESS_COLORS.WHITE),    // CELL: 1E
      ChessPieceFactory(CHESS_PIECES.BISHOP, CHESS_COLORS.WHITE),  // CELL: 1F
      ChessPieceFactory(CHESS_PIECES.KNIGHT, CHESS_COLORS.WHITE),  // CELL: 1G
      ChessPieceFactory(CHESS_PIECES.ROOK, CHESS_COLORS.WHITE)     // CELL: 1H
    ]
  ];

  // Getters
  this.getState = () => {
    let newState = []
    for (let i = 0; i < state.length; i++) {
      newState[i] = state[i].slice();
    }
    return newState;
  };
  this.getSize = () => { return SIZE };
  this.getCellSize = () => { return CELL_SIZE };
  this.getTurn = () => { return turn };

  // Setters
  this.setState = (newState) => {
    for (let i = 0; i < newState.length; i++) {
      state[i] = newState[i].slice();
    }
  };

  // Functions
  this.move = (currentRow, currentCol, newRow, newCol) => {
    let moves = state[currentRow][currentCol].moveableSquares(currentRow, currentCol, this)
      .concat(state[currentRow][currentCol].attackableSquares(currentRow, currentCol, this));

    moves.forEach(move => {
      if (move.row === newRow && move.col === newCol) {
        // castling
        if (
          state[currentRow][currentCol].type === CHESS_PIECES.KING &&
          !state[currentRow][currentCol].moved &&
          state[currentRow][currentCol].type === CHESS_PIECES.ROOK &&
          !state[currentRow][currentCol + 3].moved
        ) {
          state[newRow][newCol] = state[currentRow][currentCol];
          state[currentRow][currentCol + 1] = state[currentRow][currentCol + 3];
          state[currentRow][currentCol + 3] = null;
          state[currentRow][currentCol] = null;
        }
        else if (
          state[currentRow][currentCol].type === CHESS_PIECES.PAWN &&
          state[currentRow][currentCol].color === CHESS_COLORS.WHITE &&
          newRow === 0
        ) {
          // let renderer = new Renderer();
          // let modal = document.getElementById('modal');
          // let options = document.getElementsByClassName('modal-option');
          //
          // let chessEventListener = (event) => {
          //   let chessPiece = null;
          //   if (event.currentTarget.getAttribute('name') === 'queen') {
          //     chessPiece = CHESS_PIECES.QUEEN;
          //   }
          //   else if (event.currentTarget.getAttribute('name') === 'rook') {
          //     chessPiece = CHESS_PIECES.ROOK;
          //   }
          //   else if (event.currentTarget.getAttribute('name') === 'bishop') {
          //     chessPiece = CHESS_PIECES.BISHOP;
          //   }
          //   else if (event.currentTarget.getAttribute('name') === 'knight') {
          //     chessPiece = CHESS_PIECES.KNIGHT;
          //   }
          //
          //   state[newRow][newCol] = ChessPieceFactory(chessPiece, CHESS_COLORS.WHITE);
          //   state[currentRow][currentCol] = null;
          //   modal.style.display = 'none';
          //   removeAllEventListeners(options);
          //   renderer.clearBoard();
          //   renderer.displayBoard(this);
          //   renderer.displayPieces(this);
          // }
          // let removeAllEventListeners = (elements) => {
          //   for (let i = 0; i < elements.length; i++) {
          //     elements.item(i).removeEventListener('click', chessEventListener);
          //   }
          // }
          //
          // modal.style.display = 'block';
          // for (let i = 0; i < options.length; i++) {
          //   options.item(i).addEventListener('click', chessEventListener);
          // }

          state[newRow][newCol] = ChessPieceFactory(CHESS_PIECES.QUEEN, CHESS_COLORS.WHITE);
          state[currentRow][currentCol] = null;
        }
        else if (
          state[currentRow][currentCol].type === CHESS_PIECES.PAWN &&
          state[currentRow][currentCol].color === CHESS_COLORS.BLACK &&
          newRow === SIZE - 1
        ) {
          state[newRow][newCol] = ChessPieceFactory(CHESS_PIECES.QUEEN, CHESS_COLORS.BLACK);
          state[currentRow][currentCol] = null;
        }
        else {
          state[newRow][newCol] = state[currentRow][currentCol];
          state[currentRow][currentCol] = null;
        }

        turn = (turn === CHESS_COLORS.WHITE) ? CHESS_COLORS.BLACK : CHESS_COLORS.WHITE;

        if (state[newRow][newCol].type === CHESS_PIECES.PAWN) {
          state[newRow][newCol].moved = true;
        }
        else if (state[newRow][newCol].type === CHESS_PIECES.ROOK) {
          state[newRow][newCol].moved = true;
        }
        else if (state[newRow][newCol].type === CHESS_PIECES.KING) {
          state[newRow][newCol].moved = true;
        }


      }
    });
  }
}
