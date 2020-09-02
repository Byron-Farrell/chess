const CHESS_PIECES = {
  PAWN: 'pawn',
  ROOK: 'rook',
  KNIGHT: 'knight',
  BISHOP: 'bishop',
  QUEEN: 'queen',
  KING: 'king'
};

const CHESS_COLORS = {
  BLACK: 'black',
  WHITE: 'white'
};

const COLOR_THEME = {
  CELL1: {
    R: 0,
    G: 0,
    B: 0
  },
  CELL2: {
    R: 255,
    G: 255,
    B: 255
  },
  MOVEABLE_CELL: {
    R: 50,
    G: 255,
    B: 50
  },
  ATTACKABLE_CELL: {
    R: 255,
    G: 50,
    B: 50
  },
  SELECTED_CELL:  {
    R: 50,
    G: 50,
    B: 255
  },
};
