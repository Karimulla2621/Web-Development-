// conditional Statements : a statements that are express the relationship between two ideas.
//where ideas follows to the another ideas and implement the some condition in the code 

//1) if statement : it executes the block of code is specified then condition is true 
let age=25;
if (age>18);{
    console.log("you can vote");
}
if (age<18);{
    console.log("you can not vote");
}

let mode="dark-mode"
let color;
if (mode==="dark-mode");{
    color="black";
}
console.log(mode);
console.log(color);

//2)//This JavaScript code determines if the variable `num` is even or odd using the modulo
 //operator `%`. If `num` is divisible by 2 without a remainder, it logs “Given number is even number.” 
 //Otherwise, it logs “Given number is odd number.”

 let num = 20;

 if (num % 2 === 0) {
     console.log("Given number is even number.");
 }
 
 if (num % 2 !== 0) {
     console.log("Given number is odd number.");
 };
 
//if else statement  will perform some actions for a specific condition

let votingAge =25;
if (votingAge>=18){
    console.log("you are eligible for the vote ")
}
else(votingAge<18);{
    console.log("you are not eligible for the vote")
};

//else if Statement in javascript allows the handling multiple possible conditions and outputs 
//evaluating more than two options on whether the conditions true or false 

//check the given number is positive or negative or zero

const number=0;
if (number>0){
    console.log("given number is positive number");

} else if (number<0){
    console.log("given number is negative");
}else {
    console.log("given number is zero");
}
