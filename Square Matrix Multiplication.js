function matrixMultiplication(a, b) {
    var rowsA = a.length;
    var colsA = a[0].length;
    var rowsB = b.length;
    var colsB = b[0].length;
  
    if (colsA !== rowsB) {
      throw new Error("Incompatible matrix sizes");
    }
  
    var result = [];
  
    for (var i = 0; i < rowsA; i++) {
      result[i] = [];
      for (var j = 0; j < colsB; j++) {
        var sum = 0;
        for (var k = 0; k < colsA; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
  
    return result;
  }
  