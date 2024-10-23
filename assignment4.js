//Problem 1: Given an array let colors = ['red', 'blue', 'green', 'yellow', 'orange'], print the length of the array.
//Problem 2: Add "purple" to the array let colors = ['red', 'blue', 'green'] using the push() method.
//Problem 3: Remove the last item from the array let fruits = ['apple', 'banana', 'grape'] using pop() and print the updated array.
//Problem 4: Use unshift() to add "John" to the beginning of the array let names = ['Alice', 'Bob'] and print the updated array.
//Problem 5: Remove the first element from the array let cars = ['Tesla', 'BMW', 'Audi'] using shift() and print the updated array.
//Problem 6: Create an array let countries = ['India', 'USA', 'Germany', 'France']. Use includes() to check if "Australia" is in the array, and print the result.
//Problem 7: Use slice() to get the first three numbers from the array let numbers = [5, 10, 15, 20, 25, 30] and print the result.
//Problem 8: Create an array let numbers = [20, 40, 60, 80]. Use concat() to merge it with the array [100, 120, 140], and print the combined array.
//Problem 9: Given let words = ['Coding', 'is', 'fun'], use the join() method to create a sentence with spaces between each word.
//Problem 10: Use the sort() method to sort the array let scores = [30, 10, 50, 20, 40] in ascending order and print the sorted array.
//Problem 11: Use slice() to extract the middle two elements from the array let items = ['pen', 'pencil', 'eraser', 'sharpener', 'ruler'].
//Problem 12: Create an array let ages = [15, 30, 25, 18, 40]. Use sort() to sort the ages in descending order and print the result.
//Problem 13: Given let animals = ['cat', 'dog', 'elephant', 'tiger'], check if "lion" is present in the array using includes().
//Problem 14: Concatenate the arrays let arr1 = [1, 2, 3] and let arr2 = [4, 5, 6], and print the resulting array.
//Problem 15: Given let names = ['Alice', 'Bob', 'Charlie'], use join() to create a string with names separated by commas.
//Problem 16: Use the slice() method to get 'b','c' elements from the array let letters = ['a', 'b', 'c', 'd', 'e'].
//Problem 17: Use concat() to merge three arrays let arr1 = ['apple'], let arr2 = ['banana'], and let arr3 = ['cherry'] into one array and print the result.
//Problem 18: Create an array let languages = ['English', 'Spanish', 'French', 'German']. Check if the array contains 'Spanish' using includes() and print the result.
//Problem 19: Use sort() to sort the array let cities = ['Paris', 'New York', 'Tokyo', 'Delhi'] alphabetically and print the result.
//Problem 20: Given let phrase = ['Learning', 'JavaScript', 'is', 'exciting'], use join() to create a string with words separated by a hyphen (-)

// Problem 1
let colors = ['red', 'blue', 'green', 'yellow', 'orange'];
console.log(colors.length); // Output: 5

// Problem 2
colors.push('purple');
console.log(colors); // Output: ['red', 'blue', 'green', 'yellow', 'orange', 'purple']

// Problem 3
let fruits = ['apple', 'banana', 'grape'];
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana']

// Problem 4
let names = ['Alice', 'Bob'];
names.unshift('John');
console.log(names); // Output: ['John', 'Alice', 'Bob']

// Problem 5
let cars = ['Tesla', 'BMW', 'Audi'];
cars.shift();
console.log(cars); // Output: ['BMW', 'Audi']

// Problem 6
let countries = ['India', 'USA', 'Germany', 'France'];
console.log(countries.includes('Australia')); // Output: false

// Problem 7
let numbers = [5, 10, 15, 20, 25, 30];
console.log(numbers.slice(0, 3)); // Output: [5, 10, 15]

// Problem 8
let numbers2 = [20, 40, 60, 80];
let combined = numbers2.concat([100, 120, 140]);
console.log(combined); // Output: [20, 40, 60, 80, 100, 120, 140]

// Problem 9
let words = ['Coding', 'is', 'fun'];
console.log(words.join(' ')); // Output: 'Coding is fun'

// Problem 10
let scores = [30, 10, 50, 20, 40];
scores.sort((a, b) => a - b);
console.log(scores); // Output: [10, 20, 30, 40, 50]

// Problem 11
let items = ['pen', 'pencil', 'eraser', 'sharpener', 'ruler'];
console.log(items.slice(2, 4)); // Output: ['eraser', 'sharpener']

// Problem 12
let ages = [15, 30, 25, 18, 40];
ages.sort((a, b) => b - a);
console.log(ages); // Output: [40, 30, 25, 18, 15]

// Problem 13
let animals = ['cat', 'dog', 'elephant', 'tiger'];
console.log(animals.includes('lion')); // Output: false

// Problem 14
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = arr1.concat(arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Problem 15
let names2 = ['Alice', 'Bob', 'Charlie'];
console.log(names2.join(',')); // Output: 'Alice,Bob,Charlie'

// Problem 16
let letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters.slice(1, 3)); // Output: ['b', 'c']

// Problem 17
let arr1 = ['apple'];
let arr2 = ['banana'];
let arr3 = ['cherry'];
let mergedThreeArrays = arr1.concat(arr2, arr3);
console.log(mergedThreeArrays); // Output: ['apple', 'banana', 'cherry']

// Problem 18
let languages = ['English', 'Spanish', 'French', 'German'];
console.log(languages.includes('Spanish')); // Output: true

// Problem 19
let cities = ['Paris', 'New York', 'Tokyo', 'Delhi'];
cities.sort();
console.log(cities); // Output: ['Delhi', 'New York', 'Paris', 'Tokyo']

// Problem 20
let phrase = ['Learning', 'JavaScript', 'is', 'exciting'];
console.log(phrase.join('-')); // Output: 'Learning-JavaScript-is-exciting'
