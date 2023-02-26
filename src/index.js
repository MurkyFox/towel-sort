
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let towel = [];  
    if (matrix === undefined || matrix === null) {
      return(towel);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let n = 0; n < matrix[i].length; n++) {
        if (i % 2 === 0) {
            towel.push(matrix[i][n]);
        } else {
            towel.push(matrix[i][matrix[i].length - 1 - n]);
        }
      }
    }  
    return(towel);
  }
