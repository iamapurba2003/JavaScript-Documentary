const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
	return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function addNumbers() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult += enteredNumber;
	createAndWriteLog("+", initialResult, enteredNumber);
	writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtractNumber() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteLog("-", initialResult, enteredNumber);
	writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiplyNumber() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteLog("*", initialResult, enteredNumber);
	writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divideNumber() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteLog("/", initialResult, enteredNumber);
	writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
// or

addBtn.addEventListener("click", addNumbers);
subtractBtn.addEventListener("click", subtractNumber);
multiplyBtn.addEventListener("click", multiplyNumber);
divideBtn.addEventListener("click", divideNumber);
