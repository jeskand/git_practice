
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

function validateCred(array) {
	let arrayReversed = reverseArray(array);
	let sum = 0;
	//check every index if it's even or odd 
	for (let a = 0; a < arrayReversed.length; a++) {
		arrayReversed[a] = ifOddMultipliesValueTimes2(a, arrayReversed[a]);
		sum = sum + arrayReversed[a];
	}
    return isMultipleOfTen(sum);
};
console.log(validateCred(valid1));

function findInvalidCards(nestedArray) {
	let invalidCard = [];
	for (let i = 0; i < nestedArray.length; i++) {

		if (validateCred(nestedArray[i]) == false) {
			//console.log(nestedArray[i] +"       " + i + '   ' );
			invalidCard.push(nestedArray[i]);
		}
	}
	return invalidCard;
};

function invalidCardCompanies(array) {
	
	let companyCards = [];

	for (let i = 0; i < array.length; i++) {
		//console.log(array[i] + '    ' + i);
		let cards = array[i];
		arrayPushCompany(cards[0], companyCards);
	}

	return companyCards;
}

console.log(invalidCardCompanies(findInvalidCards(batch)));

function reverseArray(array){
	let arrayReversed = [];
	let j = 0;

	
	for (let i = array.length - 1; i >= 0; i--) {
		arrayReversed.push(array[i]);
		j++;
	}
	return arrayReversed;
}

function isMultipleOfTen(number) {
	if (number % 10 == 0) {
		return true;
	}
	else {
		return false;
	}
}

function ifLargerThan9Substract9(number) {
	if (number > 9) {
		return number - 9;
	}
	else {
		return number;
	}
}

function ifOddMultipliesValueTimes2(index, number){
	if (index % 2 == 1) {  //impar

		//multiply value * 2
		let valor = number * 2;

		number = ifLargerThan9Substract9(valor);
		return number;
	}
	else {
		return number;
	}
}

function pushIfDoesntContain(companyName, array){
	if (!array.includes(companyName)) {
		array.push(companyName);	
	}
}

function arrayPushCompany (number, array){
	if (number === 3) {
		pushIfDoesntContain('Amex', array);
	}
	else if (number === 4) {
		pushIfDoesntContain('Visa', array);
	}
	else if (number === 5) {
		pushIfDoesntContain('Mastercard', array);
	}
	else if (number === 6) {
		pushIfDoesntContain('Discover', array);
	}
	else {
		console.log('Company not found');
	}
}

