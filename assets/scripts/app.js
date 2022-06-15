let defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
// or

let calculationDescription = `( ${defaultResult} +   
10) * 3 / 2 - 1`;

let errorMessege = 'An Error \n' +  
'Occured';

outputResult(currentResult, errorMessege);
