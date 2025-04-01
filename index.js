// Base class: Polygon
class Polygon {
    constructor(sides) {
        this.sides = sides; // Array of side lengths
    }

    // Getter for number of sides
    get countSides() {
        return this.sides.length;
    }

    // Getter for perimeter (sum of all sides)
    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

// Triangle class inherits from Polygon
class Triangle extends Polygon {
    // Checks if the given sides form a valid triangle
    get isValid() {
        if (this.countSides !== 3) return false;

        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
    }
}

// Square class inherits from Polygon
class Square extends Polygon {
    // Checks if all four sides are equal
    get isValid() {
        if (this.countSides !== 4) return false;

        return this.sides.every(side => side === this.sides[0]);
    }

    // Getter for area (side^2)
    get area() {
        return this.isValid ? this.sides[0] ** 2 : undefined;
    }
}
const triangle1 = new Triangle([3, 4, 5]);
console.log(triangle1.countSides);
console.log(triangle1.perimeter);  
console.log(triangle1.isValid);   

const square1 = new Square([4, 4, 4, 4]);
console.log(square1.countSides);  
console.log(square1.perimeter);    
console.log(square1.isValid);     
console.log(square1.area);         

const invalidSquare = new Square([4, 4, 4, 5]);
console.log(invalidSquare.isValid); 
console.log(invalidSquare.area);    
