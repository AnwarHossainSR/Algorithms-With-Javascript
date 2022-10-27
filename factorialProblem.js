const factorialProblem = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorialProblem(n - 1);
}

console.log(factorialProblem(5));