//Assignment 2: Conditional Statements (if, if-else, else-if, switch case)

//(Problem 1): Write an if statement to check if x = 10 is greater than 5 and print "Greater".
//let x=10;
//if(x>5){
 //   console.log("greater");
//}

//Problem 2: Write an if-else statement to check if x = 5 is even or odd.
//let x=5;
//if (x===5){
//    console .log("x is even number ")
//}
//else {
//    console.log("x is odd number")
//}

//Problem 3: Use if-else to check if a number y = 8 is positive, negative, or zero.
//let y = 8;

//if (y > 0) {
//  console.log("Positive");
//} else if (y < 0) {
//  console.log("Negative");
//} else {
//  console.log("Zero");
//}

//Problem 4: Write an if-else if statement to check if x = 20 is less than 10, equal to 20, or greater than 20.
//let x=20;
//if(x<10){
//  console.log("x is less than 10")
//}
//else if(x===20){
 // console.log("x is equal to 20")
//}
//else if (x>20){
//  console.log("x is greater than 20")
//};


//Problem 5: Check if x = 15 is divisible by 3 and print a message accordingly using if.
//let x=15;
//if (x %3 ===0){
//  console.log("x is divisible by 3")
//}

//Problem 6: Write an if-else to check if a string name = "Alice" is exactly "Alice".
//let name="alice"
//if(name==="alice"){
  //console.log("the name is alice")
//}else{
  //console.log("the name alice")
//};

//Problem 7: Use if-else to check if x = 12 is both greater than 10 and less than 20.
//let x=12;
//if (x>10 && x<20){
 // console.log("x is both greater than 10 and less than 20")
//}
//else{
  //console.log(" does not meet on condition")
//};

//Problem 8: Write an if-else if to check if x = 9 is less than 5, between 5 and 10, or greater than 10.
//let x=9;
//if (x<5){
 // console.log("x is less than 5");
//}else if (x<=5 && x>=10){
 // console.log("x is between 5 and 10");
//}else{
//  console.log("x is grater than 10");
//}

//Problem 9: Write a switch case to check the value of day = 3 and print the corresponding day of the week.

let day=3;
switch (day){
  case 1:
  console.log("sunday");
  break;
  case 2:
    console.log("monday");
  break;
  case 3:
    console.log("tuesday");
    break;
    case 4:
    console.log("wednesday");
    break;
    case 5:
      console.log("thursday");
      break;
    case 6:
      console.log("friday");
      break;
      case 7:
        console.log("saturday");
      break;
        default:
          console.log("invalid day")
}
//Problem 10: Use switch to check if month = 4 and print the respective month.
//let month =4;
//switch(month){
  //case 1:
    //console.log("january");
    //break;
    //case 2:
      //console.log("february");
      //break;
      //case 3:
        //console.log("march");
       // break;
        //case 4:
        //console.log("april");
        //break;
        //case 5:
          //console.log("may");
          //break;
          //case 6:
            //console.log("june");
            //break;
            //case 7:
              //console.log("july");
              //break;
              //case 8:
                //console.log("august");
                //break;
                //case 9:
                  //console.log("september");
                  //break;
                  //case 10:
                //    console.log("octomber");
              //      break;
            //        case 11:
          //            console.log("november ");
        //              break;
      //                case 12:
    //                    console.log("december");
  //                      break;
 //                       default:
 //                         console.log("invalid month");
//}
//Problem 11: Write an if statement to check if a number is within the range 1 to 50 and print "Within range".
let number = 30; //example number 
if (number >=1 && number <=50){
  console.log("a Number with in the range");
}else {
  console.log("a number out of the range");
}

//Problem 12: Use if-else to determine if a variable age = 18 qualifies as an adult (18 or older).
let age = 18;
if (age>=18){
  console.log("qualifies as an adult");
}else{
  console.log("not adult")
};
//Problem 13: Write an if-else if statement to grade a student: score >= 90 (A grade) score >= 80 (B grade) score >= 70 (C grade)
let score =85;
if (score>=90){
  console.log("A grade score");
}else if(score>=80){
  console.log("B grade score");
}else if(score>=70){
  console.log("C grade score")
}else{
  console.log("failing grade")
}
//Problem 14: Use switch to categorize a fruit: "apple," "banana," or "cherry."
let fruit = "cherry"
switch (fruit) {
  case "apple":
    console.log("the fruit is apple");
    break;
    case "banana":
      console.log("the fruit is banana");
      break;
      case "cherry":
        console.log("the fruit is cherry");
        break;
        default:
          console.log("unknown fruit");
}
//Problem 15: Check if a variable x = "10" is equal to the number 10 using == and === in separate if statements.
let x= "10";

if (x==10){ // using ==
  console.log("x is equal to the number 10 ==");
}
 if(x===10){ // using ===
  console.log("x is strictly equal to the number 10 ===");
 }else{
  console.log(" x is not strictly equal to the number 10 ===");
 }

//Problem 16: Write an if statement to check if a variable is either null or undefined.
let y = null; // Example variable

if (y === null || y === undefined) {
  console.log("y is either null or undefined");
} else {
  console.log("y has a value");
}

//Problem 17: Use switch to print the name of a season based on the month number month = 11.
let month = 11;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month");
}


//Problem 18: Write an if-else to check if a temperature is "Hot," "Warm," or "Cold."
let temperature = 30;

if (temperature > 30) {
  console.log("Hot");
} else if (temperature >= 20) {
  console.log("Warm");
} else {
  console.log("Cold");
}

//Problem 19: Use if-else to determine if a character char = 'a' is a vowel or consonant.
let char = 'a';

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

//Problem 20: Write an if-else if statement to determine if a person’s age falls into categories: "Child," "Teen," "Adult," or "Senior."
let personAge = 25;

if (personAge >= 0 && personAge <= 12) {
  console.log("Child");
} else if (personAge >= 13 && personAge <= 19) {
  console.log("Teen");
} else if (personAge >= 20 && personAge <= 64) {
  console.log("Adult");
} else if (personAge >= 65) {
  console.log("Senior");
} else {
  console.log("Invalid age");
};
