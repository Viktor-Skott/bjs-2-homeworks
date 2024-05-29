//1
function parseCount(count) {
    if (isNaN(count)) {
        return new Error("Невалидное значение");
    }
    return Number.parseFloat(count);
}

// 2
function validateCount(count) {
        return parseCount(count);
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
            let hafPerimeter = 0.5 * this.getPerimeter;
            let areaFromTringle = Math.sqrt(
                hafPerimeter *
                    ((hafPerimeter - this.firstSide) *
                        (hafPerimeter - this.secondSide) *
                        (hafPerimeter - this.thirdSide)),
            );
            return Number(areaFromTringle.toFixed(3));
    }
}

function getTringle(firstSide, secondSide, thirdSide) {
    let triangle = new Triangle(firstSide, secondSide, thirdSide)
    triangle = {
        get perimeter() {
            return 'Ошибка! Треугольник не существует';
        },
        get area() {
            return 'Ошибка! Треугольник не существует';
        }
    }
}