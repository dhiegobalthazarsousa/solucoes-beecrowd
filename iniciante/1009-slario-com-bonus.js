var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let name = lines.shift();
let salary = parseFloat(lines.shift());
let salesValue = parseFloat(lines.shift());
let bonus = salesValue * 0.15;
let salaryTotal = salary + bonus;

console.log("TOTAL = R$ " + salaryTotal.toFixed(2));