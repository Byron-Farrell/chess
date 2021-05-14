/*
temp
*/

const isValidMove = (row, col, size) => {
  if (row >= 0 && row < size && col >= 0&& col < size) {
    return true;
  }
  else {
    return false;
  }
}

function ChessPieceFactory(type, color) {
  return new registeredChessPieces[type](color);
};

// TODO: forloops might not need isValidMove. Can be removed to increase performance
registeredChessPieces = {};

registeredChessPieces[CHESS_PIECES.PAWN] = function(color) {
  this.type = CHESS_PIECES.PAWN;
  this.value = 1;
  this.color = color;
  this.moved = false;
  this.icon = (CHESS_COLORS.WHITE) ? '\u2659' : '\u265F';
  this.moveableSquares = (row, col, board) => {
    let state = board.getState();
    let size = board.getSize();

    let moves = [];
    if (this.color === CHESS_COLORS.WHITE) {
      if (isValidMove(row - 1, col, size) && state[row - 1][col] === null) {
        moves.push({row: row - 1, col: col});

        if (isValidMove(row - 2, col, size) && state[row - 2][col] === null && !this.moved) {
          moves.push({row: row - 2, col: col});
        }
      }
    }
    else {
      if (isValidMove(row + 1, col, size) && state[row + 1][col] === null) {
        moves.push({row: row + 1, col: col});

        if (isValidMove(row + 2, col, size) && state[row + 2][col] === null && !this.moved) {
          moves.push({row: row + 2, col: col});
        }
      }
    }

    return moves;
  };
  this.attackableSquares = (row, col, board) => {
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    if (this.color === CHESS_COLORS.WHITE) {
      if (isValidMove(row - 1, col + 1, size) && state[row - 1][col + 1] !== null) {
        if (state[row - 1][col + 1].color !== this.color) {
          moves.push({row: row - 1, col: col + 1});
        }
      }

      if (isValidMove(row - 1, col - 1, size) && state[row - 1][col - 1] !== null) {
        if (state[row - 1][col - 1].color !== this.color) {
          moves.push({row: row - 1, col: col - 1});
        }
      }
    }

    if (this.color === CHESS_COLORS.BLACK) {
      if (isValidMove(row + 1, col + 1, size) && state[row + 1][col + 1] !== null) {
        if (state[row + 1][col + 1].color !== this.color) {
          moves.push({row: row + 1, col: col + 1});
        }
      }

      if (isValidMove(row + 1, col - 1, size) && state[row + 1][col - 1] !== null) {
        if (state[row + 1][col - 1].color !== this.color) {
          moves.push({row: row + 1, col: col - 1});
        }
      }
    }

    return moves;
  };
}

registeredChessPieces[CHESS_PIECES.ROOK] = function(color) {
  this.type = CHESS_PIECES.ROOK;
  this.value = 5;
  this.color = color;
  this.moved = false;
  this.icon = (CHESS_COLORS.WHITE) ? '\u2656' : '\u265C';
  this.moveableSquares = (row, col, board) => {
    // returns array of positions that the piece can move to
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    for (let i = row + 1; i < size; i++) {
      if (isValidMove(i, col, size) && state[i][col] === null) {
        moves.push({row: i, col: col});
      }
      else {
        break;
      }
    }

    for (let i = row - 1; i >= 0; i--) {
      if (isValidMove(i, col, size) && state[i][col] === null) {
        moves.push({row: i, col: col});
      }
      else {
        break;
      }
    }

    for (let i = col + 1; i < size; i++) {
      if (isValidMove(row, i, size) && state[row][i] === null) {
        moves.push({row: row, col: i});
      }
      else {
        break;
      }
    }

    for (let i = col - 1; i >= 0; i--) {
      if (isValidMove(row, i, size) && state[row][i] === null) {
        moves.push({row: row, col: i});
      }
      else {
        break;
      }
    }

    return moves;
  };
  this.attackableSquares = (row, col, board) => {
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    // attack down
    for (let i = row + 1; i < size; i++) {

      if (state[i][col] !== null && state[i][col].color === this.color) {
        break;
      }

      if (state[i][col] !== null && state[i][col].color !== this.color) {
        moves.push({row: i, col: col});
        break;
      }
    }

    // attack up
    for (let i = row - 1; i >= 0; i--) {

      if (state[i][col] !== null && state[i][col].color === this.color) {
        break;
      }

      if (state[i][col] !== null && state[i][col].color !== this.color) {
        moves.push({row: i, col: col});
        break;
      }
    }

    // attack right
    for (let i = col + 1; i < size; i++) {

      if (state[row][i] !== null && state[row][i].color === this.color) {
        break;
      }

      if (state[row][i] !== null && state[row][i].color !== this.color) {
        moves.push({row: row, col: i});
        break;
      }
    }

    // attack left
    for (let i = col - 1; i >= 0; i--) {

      if (state[row][i] !== null && state[row][i].color === this.color) {
        break;
      }

      if (state[row][i] !== null && state[row][i].color !== this.color) {
        moves.push({row: row, col: i});
        break;
      }
    }

    return moves;
  };
}

registeredChessPieces[CHESS_PIECES.KNIGHT] = function(color) {
  this.type = CHESS_PIECES.KNIGHT;
  this.value = 3;
  this.color = color;
  this.icon = (CHESS_COLORS.WHITE) ? '\u2658' : '\u265E';
  this.moveableSquares = (row, col, board) => {
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    if (isValidMove(row + 2, col + 1, size) && state[row + 2][col + 1] === null) {
      moves.push({row: row + 2, col: col + 1});
    }

    if (isValidMove(row + 2, col - 1, size) && state[row + 2][col - 1] === null) {
      moves.push({row: row + 2, col: col - 1});
    }

    if (isValidMove(row - 2, col - 1, size) && state[row - 2][col - 1] === null) {
      moves.push({row: row - 2, col: col - 1});
    }

    if (isValidMove(row - 2, col + 1, size) && state[row - 2][col + 1] === null) {
      moves.push({row: row - 2, col: col + 1});
    }



    if (isValidMove(row + 1, col + 2, size) && state[row + 1][col + 2] === null) {
      moves.push({row: row + 1, col: col + 2});
    }

    if (isValidMove(row + 1, col - 2, size) && state[row + 1][col - 2] === null) {
      moves.push({row: row + 1, col: col - 2});
    }

    if (isValidMove(row - 1, col - 2, size) && state[row - 1][col - 2] === null) {
      moves.push({row: row - 1, col: col - 2});
    }

    if (isValidMove(row - 1, col + 2, size) && state[row - 1][col + 2] === null) {
      moves.push({row: row - 1, col: col + 2});
    }


    return moves;
  };
  this.attackableSquares = (row, col, board) => {
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    if (isValidMove(row + 2, col + 1, size) && state[row + 2][col + 1] !== null && state[row + 2][col + 1].color !== this.color) {
      moves.push({row: row + 2, col: col + 1});
    }

    if (isValidMove(row + 2, col - 1, size) && state[row + 2][col - 1] !== null && state[row + 2][col - 1].color !== this.color) {
      moves.push({row: row + 2, col: col - 1});
    }

    if (isValidMove(row - 2, col - 1, size) && state[row - 2][col - 1] !== null && state[row - 2][col - 1].color !== this.color) {
      moves.push({row: row - 2, col: col - 1});
    }

    if (isValidMove(row - 2, col + 1, size) && state[row - 2][col + 1] !== null && state[row - 2][col + 1].color !== this.color) {
      moves.push({row: row - 2, col: col + 1});
    }

    if (isValidMove(row + 1, col + 2, size) && state[row + 1][col + 2] !== null && state[row + 1][col + 2].color !== this.color) {
      moves.push({row: row + 1, col: col + 2});
    }

    if (isValidMove(row + 1, col - 2, size) && state[row + 1][col - 2] !== null && state[row + 1][col - 2].color !== this.color) {
      moves.push({row: row + 1, col: col - 2});
    }

    if (isValidMove(row - 1, col - 2, size) && state[row - 1][col - 2] !== null && state[row - 1][col - 2].color !== this.color) {
      moves.push({row: row - 1, col: col - 2});
    }

    if (isValidMove(row - 1, col + 2, size) && state[row - 1][col + 2] !== null && state[row - 1][col + 2].color !== this.color) {
      moves.push({row: row - 1, col: col + 2});
    }


    return moves;
  };
}

registeredChessPieces[CHESS_PIECES.BISHOP] = function(color) {
  this.type = CHESS_PIECES.BISHOP;
  this.value = 3;
  this.color = color;
  this.icon = (CHESS_COLORS.WHITE) ? '\u2657' : '\u265D';
  this.moveableSquares = (row, col, board) => {
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    for (let i = row + 1, j = col + 1; i < size && j < size; i++, j++) {
      if (state[i][j] === null) {
        moves.push({row: i, col: j});
      }
      else {
        break;
      }
    }

    for (let i = row + 1, j = col - 1; i < size && j >= 0; i++, j--) {
      if (state[i][j] === null) {
        moves.push({row: i, col: j});
      }
      else {
        break;
      }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (state[i][j] === null) {
        moves.push({row: i, col: j});
      }
      else {
        break;
      }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < size; i--, j++) {
      if (state[i][j] === null) {
        moves.push({row: i, col: j});
      }
      else {
        break;
      }
    }

    return moves;
  };
  this.attackableSquares = (row, col, board) => {
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    for (let i = row + 1, j = col + 1; i < size && j < size; i++, j++) {
      if (state[i][j] !== null && state[i][j].color !== this.color) {
        moves.push({row: i, col: j});
        break;
      }
      else if (state[i][j] !== null && state[i][j].color === this.color) {
        break;
      }
    }

    for (let i = row + 1, j = col - 1; i < size && j >= 0; i++, j--) {
      if (state[i][j] !== null && state[i][j].color !== this.color) {
        moves.push({row: i, col: j});
        break;
      }
      else if (state[i][j] !== null && state[i][j].color === this.color) {
        break;
      }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (state[i][j] !== null && state[i][j].color !== this.color) {
        moves.push({row: i, col: j});
        break;
      }
      else if (state[i][j] !== null && state[i][j].color === this.color) {
        break;
      }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < size; i--, j++) {
      if (state[i][j] !== null && state[i][j].color !== this.color) {
        moves.push({row: i, col: j});
        break;
      }
      else if (state[i][j] !== null && state[i][j].color === this.color) {
        break;
      }
    }

    return moves;
  };
}

registeredChessPieces[CHESS_PIECES.QUEEN] = function(color) {
  this.type = CHESS_PIECES.QUEEN;
  this.value = 9;
  this.color = color;
  this.icon = (CHESS_COLORS.WHITE) ? '\u2655' : '\u265A';
  this.moveableSquares = (row, col, board) => {
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    for (let i = row + 1; i < size; i++) {
      if (isValidMove(i, col, size) && state[i][col] === null) {
        moves.push({row: i, col: col});
      }
      else {
        break;
      }
    }

    for (let i = row - 1; i >= 0; i--) {
      if (isValidMove(i, col, size) && state[i][col] === null) {
        moves.push({row: i, col: col});
      }
      else {
        break;
      }
    }

    for (let i = col + 1; i < size; i++) {
      if (isValidMove(row, i, size) && state[row][i] === null) {
        moves.push({row: row, col: i});
      }
      else {
        break;
      }
    }

    for (let i = col - 1; i >= 0; i--) {
      if (isValidMove(row, i, size) && state[row][i] === null) {
        moves.push({row: row, col: i});
      }
      else {
        break;
      }
    }

    for (let i = row + 1, j = col + 1; i < size && j < size; i++, j++) {
      if (isValidMove(i, j, size) && state[i][j] === null) {
        moves.push({row: i, col: j});
      }
      else {
        break;
      }
    }

    for (let i = row + 1, j = col - 1; i < size && j >= 0; i++, j--) {
      if (isValidMove(i, j, size) && state[i][j] === null) {
        moves.push({row: i, col: j});
      }
      else {
        break;
      }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (isValidMove(i, j, size) && state[i][j] === null) {
        moves.push({row: i, col: j});
      }
      else {
        break;
      }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < size; i--, j++) {
      if (isValidMove(i, j, size) && state[i][j] === null) {
        moves.push({row: i, col: j});
      }
      else {
        break;
      }
    }

    return moves;
  };
  this.attackableSquares = (row, col, board) => {
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    // attack down
    for (let i = row + 1; i < size; i++) {

      if (state[i][col] !== null && state[i][col].color === this.color) {
        break;
      }

      if (state[i][col] !== null && state[i][col].color !== this.color) {
        moves.push({row: i, col: col});
        break;
      }
    }

    // attack up
    for (let i = row - 1; i >= 0; i--) {

      if (state[i][col] !== null && state[i][col].color === this.color) {
        break;
      }

      if (state[i][col] !== null && state[i][col].color !== this.color) {
        moves.push({row: i, col: col});
        break;
      }
    }

    // attack right
    for (let i = col + 1; i < size; i++) {

      if (state[row][i] !== null && state[row][i].color === this.color) {
        break;
      }

      if (state[row][i] !== null && state[row][i].color !== this.color) {
        moves.push({row: row, col: i});
        break;
      }
    }

    // attack left
    for (let i = col - 1; i >= 0; i--) {

      if (state[row][i] !== null && state[row][i].color === this.color) {
        break;
      }

      if (state[row][i] !== null && state[row][i].color !== this.color) {
        moves.push({row: row, col: i});
        break;
      }
    }

    for (let i = row + 1, j = col + 1; i < size && j < size; i++, j++) {
      if (state[i][j] !== null && state[i][j].color !== this.color) {
        moves.push({row: i, col: j});
        break;
      }
      else if (state[i][j] !== null && state[i][j].color === this.color) {
        break;
      }
    }

    for (let i = row + 1, j = col - 1; i < size && j >= 0; i++, j--) {
      if (state[i][j] !== null && state[i][j].color !== this.color) {
        moves.push({row: i, col: j});
        break;
      }
      else if (state[i][j] !== null && state[i][j].color === this.color) {
        break;
      }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (state[i][j] !== null && state[i][j].color !== this.color) {
        moves.push({row: i, col: j});
        break;
      }
      else if (state[i][j] !== null && state[i][j].color === this.color) {
        break;
      }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < size; i--, j++) {
      if (state[i][j] !== null && state[i][j].color !== this.color) {
        moves.push({row: i, col: j});
        break;
      }
      else if (state[i][j] !== null && state[i][j].color === this.color) {
        break;
      }
    }

    return moves;
  };
}

registeredChessPieces[CHESS_PIECES.KING] = function(color) {
  this.type = CHESS_PIECES.KING;
  this.value = 1000;
  this.color = color;
  this.moved = false;
  this.icon = (CHESS_COLORS.WHITE) ? '\u2654' : '\u265A';
  this.moveableSquares = (row, col, board) => {
    // returns array of positions that the piece can move to
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    if (isValidMove(row + 1, col, size) && state[row + 1][col] === null) {
      moves.push({row: row + 1, col: col});
    }

    if (isValidMove(row - 1, col, size) && state[row - 1][col] === null) {
      moves.push({row: row - 1, col: col});
    }

    if (isValidMove(row, col + 1, size) && state[row][col + 1] === null) {
      moves.push({row: row, col: col + 1});
    }

    if (isValidMove(row, col - 1, size) && state[row][col - 1] === null) {
      moves.push({row: row, col: col - 1});
    }

    if (isValidMove(row + 1, col + 1, size) && state[row + 1][col + 1] === null) {
      moves.push({row: row + 1, col: col + 1});
    }

    if (isValidMove(row - 1, col - 1, size) && state[row - 1][col - 1] === null) {
      moves.push({row: row - 1, col: col - 1});
    }

    if (isValidMove(row - 1, col + 1, size) && state[row - 1][col + 1] === null) {
      moves.push({row: row - 1, col: col + 1});
    }

    if (isValidMove(row + 1, col - 1, size) && state[row + 1][col - 1] === null) {
      moves.push({row: row + 1, col: col - 1});
    }

    if (
      state[row][col + 1] === null &&
      state[row][col + 2] === null &&
      !state[row][col + 3].moved &&
      !this.moved
    ) {
      moves.push({row: row, col: col + 2});
    }

    return moves;
  };
  this.attackableSquares = (row, col, board) => {
    // returns array of positions that the piece can move to
    let state = board.getState();
    let size = board.getSize();
    let moves = [];

    if (isValidMove(row + 1, col, size) && state[row + 1][col] !== null && state[row + 1][col].color !== this.color) {
      moves.push({row: row + 1, col: col});
    }

    if (isValidMove(row - 1, col, size) && state[row - 1][col] !== null && state[row - 1][col].color !== this.color) {
      moves.push({row: row - 1, col: col});
    }

    if (isValidMove(row, col + 1, size) && state[row][col + 1] !== null && state[row][col + 1].color !== this.color) {
      moves.push({row: row, col: col + 1});
    }

    if (isValidMove(row, col - 1, size) && state[row][col - 1] !== null && state[row][col - 1].color !== this.color) {
      moves.push({row: row, col: col - 1});
    }

    if (isValidMove(row + 1, col + 1, size) && state[row + 1][col + 1] !== null && state[row + 1][col + 1].color !== this.color) {
      moves.push({row: row + 1, col: col + 1});
    }

    if (isValidMove(row - 1, col - 1, size) && state[row - 1][col - 1] !== null && state[row - 1][col - 1].color !== this.color) {
      moves.push({row: row - 1, col: col - 1});
    }

    if (isValidMove(row - 1, col + 1, size) && state[row - 1][col + 1] !== null && state[row - 1][col + 1].color !== this.color) {
      moves.push({row: row - 1, col: col + 1});
    }

    if (isValidMove(row + 1, col - 1, size) && state[row + 1][col - 1] !== null && state[row + 1][col - 1].color !== this.color) {
      moves.push({row: row + 1, col: col - 1});
    }

    return moves;
  };
}
