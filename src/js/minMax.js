/*
  NOTE: black/maximizer should look for min white piecees
*/

function minMax(depth, state, node, isMax) {

  if (depth === 0) {
    return node;
  }
  else {
    if (isMax) {

      // Creates a new Board object and sets the state of the board to the
      // state defined by the state parameter and then gets all possible moves
      // for that board state
      let newBoard = new Board();
      newBoard.setState(state);
      moves = getMoves(newBoard, CHESS_COLORS.BLACK);
      // console.log(state);
      // console.log(moves);

      // console.log(newBoard.getState());
      // for each move create child node and add to children array of this node
      moves.forEach(move => {

        let tempBoard = new Board();
        tempBoard.setState(state);
        tempBoard.move(
          move.currentPosition.row,
          move.currentPosition.col,
          move.newPosition.row,
          move.newPosition.col
        );

        newNode = new Node(
          tempBoard.getState(),
          move.currentPosition,
          move.newPosition,
          []
        );

        let child = minMax(depth - 1, tempBoard.getState(), newNode, !isMax);
        node.children.push(child);
      });

      maxNode = minimizer(node);
      temp = [...node.children];
      node = maxNode;
      node.children = [...temp];
      return node;
    }
    else {
      let newBoard = new Board();
      newBoard.setState(state);
      moves = getMoves(newBoard, CHESS_COLORS.WHITE);
      moves.forEach(move => {
        let tempBoard = new Board();
        tempBoard.setState(state);
        tempBoard.move(
          move.currentPosition.row,
          move.currentPosition.col,
          move.newPosition.row,
          move.newPosition.col
        );

        newNode = new Node(
          tempBoard.getState(),
          move.currentPosition,
          move.newPosition,
          []
        );

        let child = minMax(depth - 1, tempBoard.getState(), newNode, !isMax)
        node.children.push(child);
      });

      minNode = maximizer(node);

      temp = [...node.children];
      node = minNode;
      node.children = [...temp];
      return {...node};
    }
  }
}

function Node(state, currentPosition, newPosition, children) {
  this.currentPosition = currentPosition;
  this.newPosition = newPosition;
  this.children = children;
  this.state = state;
}

function maximizer(node) {
  let max = Number.MIN_SAFE_INTEGER;
  let returnValue = null;

  node.children.forEach(child => {

    //console.log(child);
    let boardValue = 0
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (child.state[row][col] !== null && child.state[row][col].color === CHESS_COLORS.BLACK) {
          boardValue += child.state[row][col].value;
        }
      }
    }
    // console.log(child.state);
    // console.log(boardValue);
    if (boardValue > max) {

      max = boardValue;
      returnValue = {...child};
      // console.log(max);
    }
  });

  return returnValue;
}

function minimizer(node) {
  let min = Number.MAX_SAFE_INTEGER;
  let returnValue = null;

  node.children.forEach(child => {
    let boardValue = 0
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (child.state[row][col] !== null && child.state[row][col].color === CHESS_COLORS.WHITE) {
          boardValue += child.state[row][col].value;
        }
      }
    }

    if (boardValue < min) {
      min = boardValue;
      returnValue = {...child};
    }
  });

  return returnValue;
}

function getMoves(board, color) {

  let moves = [];
  let state = board.getState();

  for (let row = 0; row < board.getSize(); row++) {
    for (let col = 0; col < board.getSize(); col++) {

      if (state[row][col] !== null && state[row][col].color === color) {
        let moveable = state[row][col].moveableSquares(row, col, board);
        let attackable = state[row][col].attackableSquares(row, col, board);

        if (moveable.length > 0) {
          moveable = moveable.map(move => {
            return {
              currentPosition: {
                row: row,
                col: col
              },
              newPosition: {
                row: move.row,
                col: move.col
              }
            };
          });
          moves = moves.concat(moveable);
        }

        if (attackable.length > 0) {
          attackable = attackable.map(move => {
            return {
              currentPosition: {
                row: row,
                col: col
              },
              newPosition: {
                row: move.row,
                col: move.col
              }
            };
          });
          moves = moves.concat(attackable);
        }
      }
    }
  }

  // console.log(moves);
  return moves;
}
