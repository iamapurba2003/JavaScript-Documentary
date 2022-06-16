let defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
	return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}

function addNumbers() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult += enteredNumber;
	createAndWriteLog("+", initialResult, enteredNumber);
}

function subtractNumber() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteLog("-", initialResult, enteredNumber);
}

function multiplyNumber() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteLog("*", initialResult, enteredNumber);
}

function divideNumber() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteLog("/", initialResult, enteredNumber);
}

// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
// or

addBtn.addEventListener("click", addNumbers);
subtractBtn.addEventListener("click", subtractNumber);
multiplyBtn.addEventListener("click", multiplyNumber);
divideBtn.addEventListener("click", divideNumber);
