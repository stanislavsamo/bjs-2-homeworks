class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || b + c <= a || a + c <= b) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	perimeter() {
		return this.a + this.b + this.c;
	}

	area() {
		const s = this.perimeter() / 2;
		const areaSquared = s * (s - this.a) * (s - this.b) * (s - this.c);
		return Math.sqrt(areaSquared).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
		};
	}
}