// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233..
// F(0) = F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ---->> Output: 2

// 0, 1, 1, 2, 4,

const fib = function(n) {
    const arr = [0, 1];

    for (i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }

    console.log(arr);
}

fib(5)

