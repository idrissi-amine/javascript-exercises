const add = function(a, b) {
  return a+b
	
};

const subtract = function(a, b) {
  return a - b
	
};

const sum = function(e) {
  let total = 0
  for(let i = 0 ; i < e.length ; i++){
    total = total + e[i]
  }
  return total
	
};

const multiply = function(e) {
  let total = 1
  for(let i = 0 ; i < e.length ; i++){
    total = total * e[i]
  }
  return total

};

const power = function(a, b) {
  return a ** b
	
};

const factorial = function(a) {
  if(a == 0){
    return 1
  }else{
    return a*factorial(a-1)
  }
	
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
