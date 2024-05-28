//1
function parseCount(count) {
    let error = new Error("Невалидное значение");
    if (isNaN(count)) {
        return error;
    } else {
        let resultOfParse = Number.parseFloat(count);
        return resultOfParse;
    }
}

// 2
function validateCount(count) {
    try {
        return parseCount(count);
    } catch {
        throw error;
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

    get getPerimeter() {
        try {
            let perimeter = this.firstSide + this.secondSide + this.thirdSide;
            return perimeter;
        } catch {
            throw new Error("Ошибка! Треугольник не существует");
        }
    }

    get getArea() {
        try {
            let hafPerimeter = 0.5 * this.getPerimeter;
            let areaFromTringle = Math.sqrt(
                hafPerimeter *
                    ((hafPerimeter - this.firstSide) *
                        (hafPerimeter - this.secondSide) *
                        (hafPerimeter - this.thirdSide)),
            );
            return areaFromTringle.toFixed(3);
        } catch {
            throw new Error("Ошибка! Треугольник не существует");
        }
    }
}

function getTringle(firstSide, secondSide, thirdSide) {
    new Triangle(firstSide, secondSide, thirdSide);
}