"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminantsCount = Math.pow(b, 2) - 4 * a * c; 
  if (discriminantsCount == 0) {
    let result = (-b / 2 * a);
    arr.push(result);
  } else if (discriminantsCount > 0) {
    let firstResult = (-b + Math.sqrt(discriminantsCount)) / 2 * a;
    let secondResult = (-b - Math.sqrt(discriminantsCount)) / 2 * a;
    arr.push(firstResult, secondResult);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let adaptivePercent = percent / 100;
  let bodyAmount = amount - contribution;
  let resultOfPersent = (1 / 12) * adaptivePercent;
  let countMpunthPay = bodyAmount * (resultOfPersent + (resultOfPersent / (((1 + resultOfPersent) **countMonths) - 1)));
  let resultTotalMortgage = countMpunthPay * countMonths;
  return Number(resultTotalMortgage.toFixed(2));
}