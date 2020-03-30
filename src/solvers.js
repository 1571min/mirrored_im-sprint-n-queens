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
  let board = new Board({n : n})
  let matrix = board.rows();
  for(let i = 0 ; i < matrix.length ; i++){
    for(let j = 0 ; j < matrix.length ; j++){
      board.togglePiece(i, j)
      if(board.hasAnyRooksConflicts()){
        board.togglePiece(i,j)
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(matrix));
  return matrix;
};

// n이 주어졌을 때 n rooks 문제의 전체 해답 개수를 반환합니다.
// 반환 값은 정수입니다.
window.countNRooksSolutions = function(n) {
  let board = new Board({n : n})
  let count = 0;
  let arr = [];
  const recursion = (rowIndex, checkIndex) => {
    if(rowIndex === n){
      count++
      return count
    }
    for(let i = 0; i < n ; i++){
      if(board._isInBounds(rowIndex, i)){
        board.togglePiece(rowIndex, i);
        if(!board.hasAnyRooksConflicts()){
          if(!arr.includes(i)){
            arr.push(i);
            recursion(rowIndex + 1, arr)
          }
        }
        board.togglePiece(rowIndex, i)
      }
    }
  }
  recursion(0, arr)
  return count;

  console.log('Number of solutions for ' + n + ' rooks:', count);
};

// n이 주어졌을 때 n queens 문제의 해답 한 개를 반환합니다.
// 반환 값은 체스 판을 나타내는 2차원 배열입니다.
window.findNQueensSolution = function(n) {
  var solution = undefined; // fixme

  console.log(
    'Single solution for ' + n + ' queens:',
    JSON.stringify(solution)
  );
  return solution;
};

// n이 주어졌을 때 n queens 문제의 전체 해답 개수를 반환합니다.
// 반환 값은 정수입니다.
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; // fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
