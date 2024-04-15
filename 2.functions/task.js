function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(function (currentSum, current) {
    return (currentSum = current + currentSum);
  }, 0);
  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  let sumArr = arr.reduce(function (currentSum, current) {
    return (currentSum = current + currentSum);
  }, 0);
  return sumArr;
}


function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let minDifference = Math.min(...arr);
  let maxDifference = Math.max(...arr);
  let difference = maxDifference - minDifference;
  return difference;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
  }
  let resultElement = sumEvenElement - sumOddElement;
  return resultElement;
}


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length == 0 || arr == NaN) {
    return 0;
  }
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
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    } 
  }
  return maxWorkerResult;
}
