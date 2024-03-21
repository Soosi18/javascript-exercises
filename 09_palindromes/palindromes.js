const palindromes = function (str) {
    let an = "abcdefghijklmnopqrstuvwxyz123456789";
    str = str
      .toLowerCase()
      .split("")
      .filter(char => an.includes(char))
      .join("");
    
    revStr = str
      .split("")
      .reverse()
      .join("");
    
    if (str === revStr) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
