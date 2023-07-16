function parseCount(value) {
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

const _a = Symbol('a');
const _b = Symbol('b');
const _c = Symbol('c');
const _perimeter = Symbol('perimeter');
const _area = Symbol('area');

class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this[_a] = a;
    this[_b] = b;
    this[_c] = c;
    this[_perimeter] = a + b + c;
    this[_area] = this.calculateArea();
  }

  calculateArea() {
    const p = this[_perimeter] / 2;
    const area = Math.sqrt(p * (p - this[_a]) * (p - this[_b]) * (p - this[_c]));
    return parseFloat(area.toFixed(3));
  }

  get perimeter() {
    return this[_perimeter];
  }

  get area() {
    return this[_area];
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      area: () => 'Ошибка! Треугольник не существует',
      perimeter: () => 'Ошибка! Треугольник не существует',
    };
  }
}

  