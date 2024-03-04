const repeatString = function(str, num) {
    result = "";

    if (num < 0) {
        return 'ERROR';
    }
    
    for (let i = 0; i < num; i++) {
        result = result.concat("", str);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
