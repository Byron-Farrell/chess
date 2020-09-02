(function() {
  let board = new Board();
  let renderer = new Renderer();
  let inputHandler = new InputHandler();



  function getAllMoves(board, color) {
    let size = board.getSize();
    let state = board.getState();
    let moves = [];

    for (i = 0; i < size; i++) {
      for (j = 0; j < size; j++) {
        if (state[i][j] !== null && state[i][j].color === color) {
          moves = [...moves, ...state[i][j].moveableSquares(i, j, board)];
          moves = [...moves, ...state[i][j].attackableSquares(i, j, board)];
        }
      }
    }

    return moves;
  }


  renderer.displayBoard(board);
  renderer.displayPieces(board);

  canvas.onmousedown = function(event) {
    let mouseX = event.clientX - canvas.getBoundingClientRect().left;
    let mouseY = event.clientY - canvas.getBoundingClientRect().top;

    let row = Math.floor(mouseY / board.getCellSize());
    let col = Math.floor(mouseX / board.getCellSize());

    // Clicked on a chess piece
    if (board.getState()[row][col] !== null && board.getState()[row][col].color === board.getTurn()) {
      inputHandler.selectItem(row, col, board);
    }
    else if (inputHandler.selected) {
      if (inputHandler.selectedItem.item.color === board.getTurn()) {
        board.move(inputHandler.selectedItem.row, inputHandler.selectedItem.col, row, col);
        inputHandler.selected = false;
        this.selectedItem = null;
        console.log(board.getState());
        let n = new Node(board.getState(), null, null, []);
        let x = minMax(4, board.getState(), n, true);

        console.log(x);
      }
    }

    renderer.update(board, inputHandler);


  }
})();
