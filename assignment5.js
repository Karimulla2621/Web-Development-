//Assignment 5: Objects, Nested Objects, and Array of Objects
//Create an Object:
//Create an object named person with the following properties and print the object:
name: "Alice"
age: 30
city: "San Francisco"
//Add a Property:
//Add a property email with the value "alice@example.com" to the person object.
//Create an Array of Objects:
//Create an array named students containing three objects with properties name and age and print it
Example:
{ name: "Bob", age: 22 }
{ name: "Charlie", age: 25 }
{ name: "Diana", age: 20 }
//Access Nested Properties:
//Create an object car with properties:
make: "Tesla"
model: "Model 3"
year: 2022
//Print the model of the car.
//Nested Object Example:
//Create a nested object address inside person with properties:
street: "123 Main St"
zipcode: "94101"
//Print the zipcode.
//Array of Objects with Additional Properties:
//Create an array products with objects that have properties name, price, and quantity.
Example:
{ name: "Laptop", price: 999, quantity: 5 }
{ name: "Phone", price: 699, quantity: 10 }
//Iterate Over Array of Objects:
//Create an array employees and print the names of all employees.
Example:
{ name: "Eve" }
{ name: "Frank" }
{ name: "Grace" }
//Accessing Object Properties:
//Create an object book with properties:
title: "1984"
author: { firstName: "George", lastName: "Orwell" }
//Print the full name of the author.
Update Object Property:
Modify the quantity of the second product in the products array to 15.
Remove Property from Object:
Remove/delete  the email property from the person object.
Check if Property Exists:
Check if the age property exists in the person object and print the result.
Use Object Literal for Initialization:
Create an object library with properties:
name: "Central Library"
books: an array of book titles (strings).
Combining Nested Structures:
Create a nested object university with properties:
name: "ABC University"
departments: an array containing department objects with name and courses (array of course names).
//Accessing Array of Nested Objects:
//Print the names of all departments from the university object.
//Find a Specific Object in an Array:
//Find the product object with name "Phone" in the products array and print its price.
//Object with Mixed Data Types:
//Create an object profile with properties:
username: "user123"
isActive: true
followers: 150
likes: ["post1", "post2"]
//Clone an Object:
//Create a shallow copy of the person object into a new object newPerson.
//Count Properties in an Object:
//Create a function to count the number of properties in the person object (do not implement a function, just describe how you would do it).
//Convert Object to Array of Key-Value Pairs:
//Describe how you can convert the person object into an array of key-value pairs (do not implement a function).
//Creating an Object with Default Values:
//Create an object defaultSettings with properties theme as "light" and notifications as true. Then change the theme to "dark".


// 1. Create an Object
let person = {
    name: "Alice",
    age: 30,
    city: "San Francisco"
};
console.log(person);

// 2. Add a Property
person.email = "alice@example.com";
console.log(person);

// 3. Create an Array of Objects
let students = [
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 25 },
    { name: "Diana", age: 20 }
];
console.log(students);

// 4. Access Nested Properties
let car = {
    make: "Tesla",
    model: "Model 3",
    year: 2022
};
console.log(car.model); // Prints "Model 3"

// 5. Nested Object Example
person.address = {
    street: "123 Main St",
    zipcode: "94101"
};
console.log(person.address.zipcode); // Prints "94101"

// 6. Array of Objects with Additional Properties
let products = [
    { name: "Laptop", price: 999, quantity: 5 },
    { name: "Phone", price: 699, quantity: 10 }
];

// 7. Iterate Over Array of Objects
let employees = [
    { name: "Eve" },
    { name: "Frank" },
    { name: "Grace" }
];
employees.forEach(employee => console.log(employee.name));

// 8. Accessing Object Properties
let book = {
    title: "1984",
    author: { firstName: "George", lastName: "Orwell" }
};
console.log(`${book.author.firstName} ${book.author.lastName}`); // Prints "George Orwell"

// 9. Update Object Property
products[1].quantity = 15; // Modify quantity of the second product
console.log(products[1]); // Prints the updated product object

// 10. Remove Property from Object
delete person.email; // Remove email property
console.log(person);

// 11. Check if Property Exists
console.log('age' in person); // Prints true

// 12. Use Object Literal for Initialization
let library = {
    name: "Central Library",
    books: ["Book 1", "Book 2", "Book 3"]
};
console.log(library);

// 13. Combining Nested Structures
let university = {
    name: "ABC University",
    departments: [
        {
            name: "Computer Science",
            courses: ["CS101", "CS102"]
        },
        {
            name: "Mathematics",
            courses: ["MATH101", "MATH102"]
        }
    ]
};

// 14. Accessing Array of Nested Objects
university.departments.forEach(department => console.log(department.name));

// 15. Find a Specific Object in an Array
let phoneProduct = products.find(product => product.name === "Phone");
console.log(phoneProduct.price); // Prints the price of the phone

// 16. Object with Mixed Data Types
let profile = {
    username: "user123",
    isActive: true,
    followers: 150,
    likes: ["post1", "post2"]
};
console.log(profile);

// 17. Clone an Object
let newPerson = { ...person }; // Shallow copy of person
console.log(newPerson);

// 18. Count Properties in an Object
// To count the number of properties in the person object, use:
// let propertyCount = Object.keys(person).length;

// 19. Convert Object to Array of Key-Value Pairs
// To convert the person object into an array of key-value pairs, use:
// let keyValuePairs = Object.entries(person);

// 20. Creating an Object with Default Values
let defaultSettings = {
    theme: "light",
    notifications: true
};
defaultSettings.theme = "dark"; // Change theme to dark
console.log(defaultSettings);
