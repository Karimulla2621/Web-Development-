//Assignment 1: Operators (Arithmetic, Logical, Comparison, Assignment)
//Problem 1: Find the sum of 5 and 10 using the + operator.
let sum=5+10;
console.log(sum); //output will be here 15

//Problem 2: Subtract 7 from 20 using the - operator.
//let x=7;
//let y=20;
//console.log(x-y); //output will be -13

//Problem 3: Multiply 8 by 6 using the * operator.
let p=8;
let q=6;
console.log(p*q);//output 48

//Problem 4: Divide 45 by 5 using the / operator
let h=45;
let j=5;
console.log(h/j);
//Problem 5: Find the remainder when 25 is divided by 4 using the % operator.
let r=25;
let e=4;
console.log(r%e);
//Problem 6: Compare if 10 is greater than 5 using the > operator and print the result.
//let a=10;
//let b=5;
//console.log(a>b);//true

//Problem 7: Check if 15 is equal to "15" using the == operator.
let x1=15;
let x2=15;
console.log(x1==x2);//true


//Problem 8: Check if 15 is equal to "15" using the === operator.
let y1=15;
let y2=15;
console.log(y1===y2);//true

//Problem 9: Check if 10 is not equal to 20 using the != operator.
let v=10;
let u=20;
console .log(v!=u);//true

//Problem 10: Check if 5 is less than or equal to 10 using the <= operator.
let k=5;
let m=10;
console.log(k<=m);//true

//Problem 11: Assign the value 100 to a variable x and print x.
let X=100;
console.log(X);// output 100

//Problem 12: Use the += operator to add 5 to x.
//let x=5;
//x+=5//(x=x+5)
//console.log(x);//output 10;

//Problem 13: Use the *= operator to multiply x by 2.
//let x=2;
//x*=2;//(x=x*2)
//console.log(x) //output4

//Problem 14: Use the logical && operator to check if 5 > 2 and 3 < 4 are both true.
let result = (5 > 2) && (3 < 4);
console.log(result);  // This will print "true"


//Problem 15: Use the logical || operator to check if 5 > 8 or 3 < 4 is true.
let solution=(5>8)||(3<4);
console.log(solution); //true

//Problem 16: Use the logical ! operator to reverse the boolean value of true.
let Result = !true;
console.log(Result);  // This will print "false"


//Problem 17: Check if 7 * 2 is greater than 13 + 1 using a combination of arithmetic and comparison operators.
let answer = 7*2 > 13+1;
console.log(answer);//false

//Problem 18: Check if 15 is divisible by both 3 and 5 using logical operators.
let num = 15;
let isDivisible = (num % 3 === 0) && (num % 5 === 0);
console.log(isDivisible);  // This will output: true 
//num % 3 === 0 checks if 15 is divisible by 3.
//num % 5 === 0 checks if 15 is divisible by 5.

//Problem 19: Assign 50 to variable a, subtract 10 using -= and check if a is now equal to 40.

let a = 50; // Assign 50 to variable a
a -= 10;   //a=a-a // Subtract 10 from a
console.log(a);

if (a === 40) {
console.log("a is equal to 40");
} else {
console.log("a is not equal to 40");
}

//Problem 20: Compare if the product of 6 * 3 is greater than or equal to 20 using >=.
let o=6
let i=3
let product = o*i ;
console.log(product);
let comparison = product >= 20; //18>20 false 
console.log(comparison); // false

