function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(function (currentSum, current) {
    return (currentSum = current + currentSum);
  }, 0);
  let avg = sum / arr.length;
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sumArr = arr.reduce(function (currentSum, current) {
    return (currentSum = current + currentSum);
  }, 0);
  return sumArr;
}

function differenceMaxMinWorker(...arr) {
  // через Math.max и Math.min
  // let min = Math.min(...arr);
  // let max = Math.max(...arr);
  // let difference = max - min;
  // return difference;
  let max = 0;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  let min = arr.reduce(function (currentMin, current) {
    if (currentMin > current) {
      return current;
    } else {
      return currentMin;
    }
  });

  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let resultElement = sumEvenElement - sumOddElement;
  return resultElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }
  let resultEvenElement = sumEvenElement / countEvenElement;
  return resultEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}



// // 1
// console.log(getArrayParams(2, 3, 3, 3, 2, 21));
// // 2
// console.log(differenceMaxMinWorker(9, 2, 3, 4, 6));
// // 3
// console.log(differenceEvenOddWorker(2, 2, 4));
// // 4
// console.log(averageEvenElementsWorker(2, 2, 4));
// // 5
// let arrOfArr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
// console.log(makeWork(arrOfArr, summElementsWorker));