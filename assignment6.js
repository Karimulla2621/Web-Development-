//Create a function sayHello that prints "Hello, World!".
//Write a function add that takes two numbers as parameters and returns their sum.
//Write a function subtract that takes two numbers as parameters and returns the difference.
//Create a function greet that takes a name as a parameter and prints "Hello, [name]!".
//Write a function multiply that takes two numbers as parameters and returns the product.
//Create a function isEven that takes a number and returns true if it's even, and false otherwise.
//Write a function square that takes a number as a parameter and returns its square.
//create a function findMax that takes two numbers and returns the larger one.
//Write a function reverseString that takes a string as a parameter and returns the reversed string.
//Create a function factorial that takes a number and returns its factorial (e.g., factorial(5) = 5 * 4 * 3 * 2 * 1).
//Write a function isPalindrome that checks if a given string is a palindrome.
//Create a function sumArray that takes an array of numbers and returns the sum of all elements.
//Write a function average that takes an array of numbers and returns the average.
//Create a function findMin that takes an array of numbers and returns the smallest number.
//Write a function countVowels that counts the number of vowels in a given string.
//create a function capitalizeWords that takes a sentence and capitalizes the first letter of each word.
//Write a function removeDuplicates that takes an array and removes duplicate elements.
//Create a function mergeArrays that merges two arrays without duplicates.
//Write a function fibonacci that returns the first n numbers in the Fibonacci sequence.
//Create a function power that takes two parameters, base and exponent, and returns the result of base^exponent.
// Function to print "Hello, World!"
function sayHello() {
    console.log("Hello, World!");
}

// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to greet with a name
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Function to return the square of a number
function square(num) {
    return num * num;
}

// Function to find the maximum of two numbers
function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to calculate factorial
function factorial(num) {
    if (num < 0) return undefined; // Factorial for negative numbers is not defined
    if (num === 0) return 1; // 0! is 1
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Function to sum all elements in an array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Function to calculate the average of an array
function average(arr) {
    return sumArray(arr) / arr.length;
}

// Function to find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// Function to count vowels in a string
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Function to merge two arrays without duplicates
function mergeArrays(arr1, arr2) {
    return removeDuplicates([...arr1, ...arr2]);
}

// Function to return the first n numbers in the Fibonacci sequence
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

// Function to calculate power of base raised to exponent
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Example usages:
sayHello(); // Hello, World!
console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
greet("Alice"); // Hello, Alice!
console.log(multiply(2, 3)); // 6
console.log(isEven(4)); // true
console.log(square(5)); // 25
console.log(findMax(10, 20)); // 20
console.log(reverseString("hello")); // "olleh"
console.log(factorial(5)); // 120
console.log(isPalindrome("racecar")); // true
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(average([1, 2, 3, 4])); // 2.5
console.log(findMin([5, 3, 8, 1])); // 1
console.log(countVowels("hello world")); // 3
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(mergeArrays([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(power(2, 3)); // 8
