
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
  if( matrix === undefined) {
    return result
  } else {
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !==0) {
          matrix[i].sort((a,b)=> b-a);
        }
        for (let k = 0; k < matrix[i].length; k++) {
          result.push(matrix[i][k]);
        }
        }

  }
  return result;
  }

