const add = function(num1, num2) {
	let arr = Array.from(arguments);
  return arr.reduce((total, val) => total + val, 0);
};

const subtract = function(num1, num2) {
	let arr = Array.from(arguments);
  return arr.reduce((sub, val) => sub - val);
};

const sum = function(arr) {
	return arr.reduce((total, val) => total + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, val) => total * val, 1);
};

const power = function(num, exp) {
  return num ** exp;
};

const factorial = function(num) {
  let product = 1;
  if (num === 0) return 1;

  for(let i = 1; i <= num; i++){
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
