const convertToCelsius = function(tempInF) {
  let tempInC = (tempInF - 32) * (5/9);
  if (Number.isInteger(tempInC)){
    return tempInC;
  }
  return parseFloat(tempInC.toFixed(1));
};

const convertToFahrenheit = function(tempInC) {
  let tempInF = tempInC * (9/5) + 32
  if (Number.isInteger(tempInF)){
    return tempInF;
  }
  return parseFloat(tempInF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
