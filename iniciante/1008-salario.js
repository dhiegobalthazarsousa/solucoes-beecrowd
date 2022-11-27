var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let idEmployee = lines.shift();
let workedHours = parseInt(lines.shift());
let salaryPerHour = parseFloat(lines.shift());
let salary = workedHours * salaryPerHour;

console.log('NUMBER = ' + idEmployee + '\n' + 'SALARY = U$ ' + salary.toFixed(2));