// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward


// Input: x = 121 => Output: true
// Input: x = 10  => Output: false

const isPalindrome = x => {
    return x === +x.toString().split("").reverse().join("");
    // console.log(+"10");
}

const res = isPalindrome(121);
console.log(res);

// .toString ==> 121 => "121"
// .split() ==> ["1", "2", "1"];