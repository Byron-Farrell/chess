function InputHandler() {
  this.selected = false;
  this.selectedItem = null;

  this.selectItem = (row, col, board) => {
    let state = board.getState();

    if (!this.selected) {
      this.selected = true;
      this.selectedItem = {
        row: row,
        col: col,
        item: state[row][col]
      }
    }
    else if (this.selectedItem.row === row && this.selectedItem.col === col) {
      this.selected = false;
    }
    else if (state[row][col] !== null) {
      this.selected = true;
      this.selectedItem = {
        row: row,
        col: col,
        item: state[row][col]
      }
    }
  }
}
