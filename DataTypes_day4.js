//JavaScript has 8 Datatypes

//String: string is a collection of characters is called strings can be written with QUOTES
let x1='This is a car '; // single quotes('');  
console.log( typeof(x1));
let x2="my name shaik karimulla"; //Double Quotes("");
console.log(x2);
console.log(x1+x2);

//Number:The number which represents a numeric values or decimal values (floating point number 100.00)
let a=100; // with out decimals
console.log(a);
let b=34.7; // with decimals 
console.log(b);
console.log(typeof(b));

//Boolean: booleans can have only two values either true or false
 let xy=20;
 let zx=20;
 let zy=10;
 console.log(xy==zx);
 console.log(xy==zy);

//Undefined: a variable without a value has rhe value called the undefined the type is also defined as undefined 
let apple;
console.log(apple);
//Null absence of object
let h= null;
console.log(h);
console.log(typeof(h));

//Bigint : All JavaScript numbers are stored in a 64-bit floating-point format.
//JavaScript BigInt is a new datatype 
//(ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
let k=BigInt(1,2,3,4,5,6,7,8,9,10);
console.log(k);
