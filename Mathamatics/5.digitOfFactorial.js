const digitsInFactorial=(N)=>{
    if (N < 0) {
        return 0;
    }
    if (N <= 1) {
        return 1;
    }
    let x = N * Math.log10(N / Math.E) + Math.log10(2 * Math.PI * N) / 2.0;
    return Math.floor(x) + 1;
    }
    console.log(digitsInFactorial(120));