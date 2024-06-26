﻿//1
function parseCount(count) {
    if (isNaN(count)) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(count);
}

// 2
function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
}

//3 
class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
        if (
            firstSide + secondSide < thirdSide ||
            firstSide + thirdSide < secondSide ||
            secondSide + thirdSide < firstSide
        ) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
            return this.firstSide + this.secondSide + this.thirdSide;
    }

    get area() {
            let hafPerimeter = 0.5 * this.perimeter;
            let areaFromTringle = Math.sqrt(
                hafPerimeter *
                    ((hafPerimeter - this.firstSide) *
                        (hafPerimeter - this.secondSide) *
                        (hafPerimeter - this.thirdSide)),
            );
            return Number(areaFromTringle.toFixed(3));
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide)
    } catch (error) {
        return {
            get perimeter() {return 'Ошибка! Треугольник не существует';},
            get area() {return 'Ошибка! Треугольник не существует';}
        }
    }  
}