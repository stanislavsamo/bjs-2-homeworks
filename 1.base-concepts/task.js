"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		let answer = -b / (2 * a);
		arr.push(answer);
	} else {
		let answer1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let answer2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(answer1, answer2);
	}
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return 'Ошибка ввода. Все значения должны быть числами.';
	}

	let monthlyInterestRate = percent / 100 / 12;
	let loanAmount = amount - contribution;
	let monthlyPayment = loanAmount * (monthlyInterestRate + (monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1)));
	let totalPayment = monthlyPayment * countMonths;

	return +totalPayment.toFixed(2);
}