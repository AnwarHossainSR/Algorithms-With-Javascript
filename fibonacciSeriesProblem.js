//Fibonacci Series Problem

const fibonacciSeries = (n) => {
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
};
console.log(fibonacciSeries(1));
//fibonacciSeries(7)