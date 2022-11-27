var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let piece1 = lines.shift().split(' ');
let piece2= lines.shift().split(' ');
let result = piece1[1]*piece1[2] + piece2[1]*piece2[2];
console.log("VALOR A PAGAR: R$ " + result.toFixed(2));