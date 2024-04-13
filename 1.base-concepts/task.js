"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c; 
  if (d < 0) {
    return arr;
  } else if (d == 0) {
    let result = (-b / 2 * a);
    arr.push(result);
  } else if (d > 0) {
    let result1 = (-b + Math.sqrt(d)) / 2 * a;
    let result2 = (-b - Math.sqrt(d)) / 2 * a;
    arr.push(result1, result2)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let adaptivePercent = percent / 100;
  let s = amount - contribution;
  let p = (1 / 12) * adaptivePercent;
  let n = countMonths;
  let countMpunthPay = s * (p + (p / (((1 + p) **n) - 1)));
  return countMpunthPay * countMonths;
}