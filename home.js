// How to write a comment inline
console.log("hello");

// -----------------------------------

// variables

const b = "smoothie";
console.log(b);

const someNumber = 50;
console.log(someNumber);

// ------------------------------------

// this is how you select html element and insert new text

document.getElementById('someText').innerHTML = "hey there";

// ------------------------------------

// alert('hello') this is an alert message

// ------------------------------------

//  this will store a string to a variable then add it to an element

// var age = prompt('what is your age');

// document.getElementById('someText').innerHTML = age;

// ------------------------------------

// numbers in javascript

var num1 = 10;
// increment num1 by 1
// num1 = num1 + 1;
// or
num1++;
num1++;
// decrement num1 by 1
num1--;
num1--;
num1--;
console.log(num1);

// ------------------------------------

// divide and multiply *, remainders %,

// this is a example of remainders %

console.log(num1 % 5);

// this is an example of dividing

console.log(num1 / 2);

// ------------------------------------

// increment and decrement by any number you want

num1 += 10;
num1 -= 20;

console.log(num1);

// ------------------------------------

// functions

// 1. create a function
// 2. call a function

// create
function Fun() {
  console.log("this is a function");
}

// call

Fun();

// ------------------------------------

// lets create a function that creates a name and returns to you and says hello followed by your name for example if your name is zayne then the function should return your name

// name "zayne"
// return " hello zayne"

function greeting() {
    var name = prompt('what is your name');
    var result = "hello " + name; //string concatenation
    console.log(result);

}

// calling the function is commented out so id doesnt run

// greeting()


// ------------------------------------

//how do arguments work in functions?

// how do we add two numbers in a function ?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result)
}

sumNumbers(10 , 10);


// since we havent enforced that the argument has to be numbers we can also do a string

sumNumbers("10", "10")

// or this

sumNumbers("10", 10);

// ------------------------------------

// this is how to pass an argument thru a prompt


// first declare the function

// function yourAge( this is just to pass the props of the argument down to the function inside the parenthesis) {}

function yourAge(age) {
    var result = "your age is " + 
    // age still hasent been declared so it is empty
    age;
    console.log(result);
    // result will still just return "your age is " untill we pass in an argument

}
// assign the data from promp() to a variable


// commented out to continue to next lesson

// var age = prompt("what is your age?");

// commented out to continue to next lesson


// then we pass in that variable because it is now assigned the age when the user fills out the promps 

// this will return the function

yourAge(age);

// ------------------------------------

// while loops !! :)

// var num = 0;

// while (num < 100) {
//     num += 1;
//     console.log(num)
// }

// ------------------------------------


// for loop

for (let num = 0; num <= 100; num ++) {
    console.log(num);
}

// for loops are much easier to write and read and they dont cause these weirds problems that while loops cause

// ------------------------------------

// data types

let yourAgee = 29; // number
let yourName = 'zayne'; //string
let name = {first: "zayne", last: 'Lovecraft'}; // object
let truth = false; //boolean
let groceries = ["apple", "bannana", "oranges"]; //array

let random; //undefined
let nothing = null; // value null


// ------------------------------------

// common string opperations

// strings in javascript and common uses for strings (common methods)

let fruit = "bannana";

// how to add more and have data break onto new line

let moreFruits = "bannana \napple \noranges"

console.log(moreFruits);

// if you remove \n it will not be added onto a new line

// you can also find the length 

console.log(moreFruits.length);

// it doesnt count 0 because it counts the actual length

// how to find the index of

console.log(moreFruits.indexOf('b'))

// this will return what index it finds the letter in

// you can also slice the index

console.log(moreFruits.slice(0, 9));

// this will return the letters between this index of 0-9

// this will replace the data with new data

console.log(moreFruits.replace("ban", '1234444444'));

// to uppercase

console.log(moreFruits.toUpperCase(moreFruits));

// to lowercase

console.log(moreFruits.toLowerCase(moreFruits));

// returns the character at index of ()

console.log(moreFruits.charAt(2));
console.log(moreFruits[2]);

// these two are the same thing

// you can split a string on a collumn

console.log(moreFruits.split(',')); //splits by a comma

console.log(moreFruits.split('')); //splits by character

// Arrays
// two ways to create the same array

let food = ["hamburger", "toast", "sushi"];
food = new Array ("hamburger", "toast", "sushi");

console.log(food[1]); //access value at index 2

// change the data

food[0] = "rice";

console.log(food);

// this will go thru the array of fruits and print out one item at a time

for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}


// ------------------------------------

// array common methods

console.log("to string", food.toString());
console.log(food.join('-')); //joins items in array with chosen "-"
console.log(food, food.pop(), food); //pops off the last item
console.log(food.push('pinapple'), food); //adds item to end of array
console.log(food[3]);
food[3] = 'soda'; //how to add a new food item to the array
food[food.length] = 'gum'; // this is the same way it just adds it to the end of the array (same as push)
console.log(food);

food.shift(); //this will remove the first element from a list (this is costly dont use shift)

console.log(food);

food.unshift('kiwi') // add first element to an array

console.log(food)

let vegetables = ['pees', 'pepper', 'zucinni', 'tomato', 'broccoli'];

let list = food.concat(vegetables); // combines array
console.log(list);
console.log(list.slice(0, 5)) 
console.log(list.reverse()) //reverses an array
console.log(list.sort()); // sorts array alphabetical order

let someNumbers = [5, 10, 2, 25, 3, 6, 54, 654, 22, 66, 666];

console.log(someNumbers.sort(function(a, b) {return a-b})); // sorts numbers (<)
console.log(someNumbers.sort(function(a, b) {return b-a})); // sorts numbers (reverse b-a to order >)

// --------------------------------
let emptyArray = new Array();

for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}

// this adds information to an empty array

console.log(emptyArray);

// then logs the array

// --------------------------------

// objects in javascript

let student = {


    first: 'zayne', 
    last: 'Lovecraft',
    age: 27,
    race: "white",
    studentInfo: function () {
        return this.first + '\n' + this.last + "\n" + this.age;
    }


};

console.log(student.first);
console.log(student.last);

// assign object key new value

student.first = "namechange"; //change value

// you can increment student age

student.age++;

console.log(student.age);

// you can store functions in objects

console.log(student.studentInfo());

// conditionals, control flows (if else)
// 18-35 is my target demographic

// && and
// || or


var age = 45;

if( (age > 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience'
}


// switch statements
// differentiate between weekday vs weekend
// day 0 --> sunday
// day 6 --> saturday -->
// day 4 --> thursday --> weekday 
// ect....

switch (5) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = "weekend";
        break;
    case 6:
        text = "weekend";
        break;
    default:
        text = 'weekday';
    
};

console.log(text)



























