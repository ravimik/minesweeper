const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let numRows = 0; numRows<numberOfRows; numRows++) {
    let row = [];
    for (let numCol=0; numCol<numberOfColumns; numCol++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
  //console.log(board);
}


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let numRows = 0; numRows<numberOfRows; numRows++) {
    let row = [];
    for (let numCol=0; numCol<numberOfColumns; numCol++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced<numberOfBombs) {
    let randomRowIndex = Math.floor(numberOfRows * Math.random());
    let randomColumnIndex = Math.floor(numberOfColumns * Math.random());
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    //doesnt take into account duplicate bombs placed on earlier bombs
  }
  return board;
  //console.log(board);
}

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

const playerBoard = generatePlayerBoard(4,4);
const bombBoard = generateBombBoard(4,4,6);

 
