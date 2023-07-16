﻿function parseCount(value) {
	let parsedValue = Number.parseFloat(value);
	if (Number.isNaN(parsedValue)) {
		throw new Error('Невалидное значение');
	}
	return parsedValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    set perimeter(value) {
      throw new Error('Невозможно переопределить значение периметра треугольника.');
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return parseFloat(area.toFixed(3)); // Return the area as a numeric value, not a string
    }
  
    set area(value) {
      throw new Error('Невозможно переопределить значение площади треугольника.');
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        area: () => 'Ошибка! Треугольник не существует', // Use a function to return the error message as a string
        perimeter: () => 'Ошибка! Треугольник не существует', // Use a function to return the error message as a string
      };
    }
  }
  