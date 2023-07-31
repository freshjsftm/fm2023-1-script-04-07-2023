'use strict';

//abstract
class Figure {
  #name; //private
  constructor(name) {
    if (this.constructor === Figure) {
      throw new Error('You cannot create instance in abstract class Figure');
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be string');
    }
    this.#name = name || 'noname';
  }
  get name() {
    return this.#name;
  }
  getInfo() {
    return 'Figure: ' + this.#name;
  }
  getArea() {}
  getPerimetr() {}
}

class Triangular extends Figure {
  #sideA;
  #sideB;
  #angleAB;
  constructor(sideA, sideB, angleAB) {
    super('Triangular');
    this.#sideA = sideA;
    this.#sideB = sideB;
    this.#angleAB = angleAB;
  }
  getArea() {
    return (
      (this.#sideA * this.#sideB * Math.sin((this.#angleAB * Math.PI) / 180)) /
      2
    );
  }
}

class Circle extends Figure {
  #radius;
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.#radius * this.#radius;
  }
  get radius() {
    return this.#radius;
  }
  set radius(radius) {
    if (typeof radius !== "number" || Number.isNaN(radius)) {
      throw new TypeError("radius must be number");
    }
    if (radius <= 0) {
      throw new RangeError("radius must be more 0");
    }
    this.#radius = radius;
  }
}

class Square extends Figure {
  #side;
  constructor(radius) {
    super('Square');
    this.#side = side;
  }
  getArea() {
    return this.#side * this.#side;
  }
}

const fig1 = new Triangular(2, 3, 45);
//fig1.name = 456; //index.js:66 Uncaught TypeError: Cannot set property name of #<Figure> which has only a getter
//console.log(fig1.getArea());

const fig2 = new Circle(5);
//console.log(fig2.getArea());
//console.log(fig2.#radius)

function getAreaFigure(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError('must be instance Figure');
}


