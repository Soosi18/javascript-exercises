const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    const fib = [];
    fib.push(0);
    fib.push(1);
    for(let i = 2; i <= parseInt(num); i++){
        fib.push((fib[i-1] + fib[i-2]));
    }
    return fib[parseInt(num)];
};

// Do not edit below this line
module.exports = fibonacci;
