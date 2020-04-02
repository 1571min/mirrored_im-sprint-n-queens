/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// n이 주어졌을 때 n rooks 문제의 해답 한 개를 반환합니다.
// 반환 값은 체스 판을 나타내는 2차원 배열입니다.
window.findNRooksSolution = function(n) {
  let board = new Board({ n: n });
  let matrix = board.rows();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      board.togglePiece(i, j);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, j);
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(matrix));
  console.log(this.countingTogle(matrix));
  return matrix;
};

// n이 주어졌을 때 n rooks 문제의 전체 해답 개수를 반환합니다.
// 반환 값은 정수입니다.
window.countNRooksSolutions = function(n) {
  let board = new Board({ n: n });
  let count = 0;
  let isTogglArr = Array(n).fill(0);
  const recursion = (rowIndex, isTogglArr) => {
    if (rowIndex === n) {
      count++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (isTogglArr[i] !== 1) {
        board.togglePiece(rowIndex, i);
        if (!board.hasAnyRooksConflicts()) {
          isTogglArr[i] = 1;
          let newArr = JSON.parse(JSON.stringify(isTogglArr));
          recursion(rowIndex + 1, newArr);
        }
        isTogglArr[i] = 0;
        board.togglePiece(rowIndex, i);
      }
    }
  };
  recursion(0, isTogglArr);
  return count;
};

// n이 주어졌을 때 n queens 문제의 해답 한 개를 반환합니다.
// 반환 값은 체스 판을 나타내는 2차원 배열입니다.
window.findNQueensSolution = function(n) {
  let board = new Board({ n: n });
  let solution = undefined; // fixme

  if (n === 2 || n === 3) {
    return board.rows();
  }
  function recursion(rowIndex) {
    if (rowIndex === n) {
      solution = board.rows();
      return;
    }
    for (let i = 0; i < n; i++) {
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyQueensConflicts()) {
        recursion(rowIndex + 1);
      }
      if (solution) {
        break;
      }
      board.togglePiece(rowIndex, i);
    }
  }
  recursion(0);
  return solution;
};

function countingTogle(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[j][i] === 1) {
        count++;
      }
    }
  }
  return count;
}

// n이 주어졌을 때 n queens 문제의 전체 해답 개수를 반환합니다.
// 반환 값은 정수입니다.
window.countNQueensSolutions = function(n) {
  let board = new Board({ n: n });
  let count = 0;
  let isTogglArr = Array(n).fill(0);
  const recursion = (rowIndex, isTogglArr) => {
    if (rowIndex === n) {
      count++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (isTogglArr[i] !== 1) {
        board.togglePiece(rowIndex, i);
        if (!board.hasAnyQueensConflicts()) {
          isTogglArr[i] = 1;
          let newArr = JSON.parse(JSON.stringify(isTogglArr));
          recursion(rowIndex + 1, newArr);
        }
        isTogglArr[i] = 0;
        board.togglePiece(rowIndex, i);
      }
    }
  };
  recursion(0, isTogglArr);
  return count;
};
