// Given a positive integer value N. The task is to find how many numbers less than or equal to N have numbers of divisors exactly equal to 3.


const isPrime = (num) => {
    if (num == 1) {
        return false;
    } else if (num == 2 || num == 3) {
        return true;
    } else if (num % 2 == 0) {
        return false;
    } else if (num % 3 == 0) {
        return false;
    } else {
        for (let i = 5; i * i <= num; i = i + 6) {
            if (num % i == 0 || num % (i + 2) == 0) {
                return false;
            } else {
                return true;
            }
        }
    }
    return true;
};

const exactThreeDevi = (N) => {
    let c = 0
    for (let i = 2; i * i <= N; i++) {
        if (isPrime(i)) {
            if (i * i <= N) {
                c++
            }
        }
    }
    return c
}