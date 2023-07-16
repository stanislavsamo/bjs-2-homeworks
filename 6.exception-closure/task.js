function parseCount(value) {
	let parsedValue = Number.parseFloat(value);
	if (Number.isNaN(parsedValue)) {
		throw new Error('Невалидное значение');
	}
	return parsedValue;
}