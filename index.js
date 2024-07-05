/*  Different variable types */

// var a = 5; 
// var functionally or globally scope.
// Can be redeclared.
// Can be declared without initialization.
// Can be updated.
// let b = 10; 
// let is block scoped.
// Cannot be re-declared within its scope.
// Can be decalred without initialization.
// Can be updated.
// const c = 15; 
// const is block scoped.
// Cannot be re-declared within its scope.
// Must be initialized at the time of declaration.
// Can never be updated.



/************   == Vs ===   **************/ 

// == only checks for the values

// === checks for the value + type

//let a = 5;
//let b = '5';

//console.log(a == b);
//console.log(a === b);


/* Arrays in JavaScript */

//let a = 4;
//let b = 5;
//var c = 'hello';

//const arr = [a,b,c];
// it is equivalent to const arr = [4,5,'hello']
//console.log(arr);


// The most frequently used array methods in JS are: map, filter, find, reduce, and forEach.

// Map array method: map creates a new copy of the original array. 
// We use it when we want to do something with the elements of the original array but don't want to change it.
// map iterates over the original array and takes a callback function as an argument. 
// In the callback function, we tell it what to do with the elements.
/*
let a = [1,2,3,4,5]

const d = a.map(function(item){
    return item*2
});
console.log(d);


*/
// Filter array method
// filter creates a new array with elements that meet the given condition(s).
//const c = a.filter(x => x%2 == 0);
//const b = a.filter(x => x%2 != 0);
//console.log(c);
//console.log(b);


// forEach array method
// forEach is very similar to map but has two key differences: 
// map returns a new Array, but forEach doesn't.

//const f = a.forEach((x) => (x%2 == 0 ? x*2 : x));
//console.log(f); 

// you can do method chaining in map but not in forEach.
/*
function consoleEven(arr) {
    let data = arr
      .map((num) => (num % 2 === 0 ? num * 2 : num * 1))
      .map((item) => (item % 2 === 0 ? item / 2 : item / 1)) // chaining
      
    console.log(data)
  }
  
  consoleEven(a)
*/
// Note: map and forEach don't mutate (change) the original array.


// Reduce array method
// The reduce method in JavaScript is a powerful array method 
// that applies a function against an accumulator and each element in the array (from left to right) 
// to reduce it to a single value. 

// Syntax - array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])

// Sum of all elements in array

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

//console.log(sum); // Output: 15

// Flattening an array of arrays

const arrays = [[1, 2], [3, 4], [5, 6]];

const flattened = arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

//console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// Counting occurences of values in an array

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

//console.log(fruitCount); // Output: { apple: 2, banana: 3, orange: 2 }

// Grouping objects by a property
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
    { name: 'Edward', age: 21 }
];

const groupedByAge = people.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue.age]) {
        accumulator[currentValue.age] = [];
    }
    accumulator[currentValue.age].push(currentValue.name);
    return accumulator;
}, {});

//console.log(groupedByAge);
// Output:
// {
//   '21': [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }, { name: 'Edward', age: 21 }],
//   '25': [{ name: 'Bob', age: 25 }, { name: 'David', age: 25 }]
// }


/* Functional Programming in JavaScript 🛠 */

// We can create functions in two ways: 

/*
function a(){
    console.log('I am a normal function');
}

const b = (name) => {
    console.log(`I am an ${name} function`)
}


a();
b('arrow'); // passing arguments


// We can also pass function as arguments to a function.

const greet = () =>  {
    const prefix = 'Mr'
    return (name) => {
        console.log(`${prefix} ${name}, welcome!`)
    }
}

greet()('Jack')

*/

/* 

There are three types of scope:

Global (declaration outside of any function)
Function (declaration inside a function)
Block (declaration inside a block)

*/

/*  Closures in JavaScript  */

// A function bundled together with its lexical environment forms a closure. - MDN

// Lexiacal Environment - It is essentially the surrounding state – the local memory along with the lexical environment of its parent.

// If a function is enclosed inside another function it will have the lexical environment of its parent.


function x() {
    var a = 7
    function y() {
      console.log(a)
    }
    return y
  }

 // var z = x(); // involed x() -> returns y -> y() -> prints the value of a i.e. 7
 // console.log(z); // z takes the whole y function as its value
 // z(); // y is executed basically, prints the value of a i.e. 7

// when we invoke z(), y has to log a so it first tries to find 🔍 it in the local memory but it's not there. It goes to its parent function. It finds a there.

// This is closure

// Even when functions are returned (in the above case y) they still remember their lexical scope (where it came from)


var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};
expect(5).toBe(5); // true
 //expect(5).notToBe(5); // throws "Equal"
 

 /* Currying */

// Currying in JavaScript is a technique of transforming a function that takes multiple arguments, 
// into a sequence of functions, each taking a single argument. 
// It is a process of breaking down a function with multiple arguments into a series of unary (single-argument) functions.

// Non curried fn()
function add(a, b) {
  return a + b;
}
//console.log(add(2, 3)); // Outputs: 5


// Curried fn()
function addCurried(a){
    return function(b){
        return a + b;
    }
}

const addTwo = addCurried(2);
//console.log(addTwo(3)); 


/* Data hiding/Encapsulation */

function counter(){
    var count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

var adder = counter();
//adder();
//adder();

/*  Disadvantages of closures - Overconsumption of memory or memory leaks can happen. */


/* Hoisting in JavaScript */

// This is JavaScript's default behavior of moving declarations to the top of the program.

// var declaration is hoisted up and initialized with undefined.

// let and const declarations are hoisted up but not initialized.

// function definitions are also hoisted up and stored as they are.


/*  this  */

//console.log(this); // points to the window object

function myFunc() {
    console.log(this)     
}
 
// myFunc(); - window()
const obj = {
  bool: true,
  myFunc: myFunc,
}

//obj.myFunc() // - obj{}

// What we did above is Implicit Binding

// Explicit binding is when you force a function to use a certain object as its this.

const student_1 =  {
    name: 'Randall',
    displayName_1: function displayName() {
        console.log(this.name)
    }
}
const student_2 =  {
    name: 'Raj',
    /*displayName_2: function displayName() {
        console.log(this.name)
    }*/
}

//student_1.displayName_1()
//student_2.displayName_2()

//student_1.displayName_1();
//student_1.displayName_1.call(student_2); // using the same function() keeping it DRY

// call forced displayName_1 to use the second object as its this.

const myData = {
    name: 'Rajat',
    city: 'Delhi',
    displayStay: function() {
      console.log(this.name, 'stays in', this.city)
    },
  }
 // myData.displayStay()
  
// create an object yourData and try to use displayStay
const yourData = {
name: 'Raj',
city: 'Mumbai'
}


// answer
//myData.displayStay.call(yourData)

// There are differences b/w arrow functions and regular functions
// For an arrow function, the value of this depends on the lexical scope – that is to say, the outer function where the arrow function is declared.
// if we make the displayName() from above an arrow function, nothing will work.
// Arrow functions basically inherit the parent's context which in the above case is the window.


/* Prototypes and Prototypal Inheritance */

// Whenever we create anything (like an object or function) in JavaScript, the JS Engine automatically attaches that thing with some properties and methods.

// __proto__ is the object where JS is putting it all.

//let arr = ['Rajat', 'Raj']
//console.log(arr.__proto__.forEach)
//console.log(arr.__proto__) // same as Array.prototype
//console.log(arr.__proto__.__proto__) // same as Object.prototype
//console.log(arr.__proto__.__proto__.__proto__) // null

// All this is called the prototype chain

// We will always find Object.prototype behind the scenes. That's why you may have heard that everything in JS is an object. 🤯

/*
let object = {
    name: 'Rajat',
    city: 'Delhi',
    getIntro: function () {
      console.log(`${this.name}, ${this.city}`)
    },
  }
  
  let object2 = {
    name: 'Aditya',
  }



  object2.__proto__ = object

  console.log(object2.city);

  function Person(name, age) {
    this.name = name;
    this.age = age;
   }
   Person.prototype.display = function() {
    console.log(this.name, this.age);
   };

   function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
   }
   Employee.prototype = Object.create(Person.prototype);
   const emp = new Employee('Mike', 20, 4000);
   console.log(emp); // {name: "Mike", age: 20, salary: 4000}
   emp.display(); //  Error: emp.display is not a function if we don't assign prototype of employee

   */


function z(){
    var b = 9;
    function x(){
        var a = 7;
        function y(){
            console.log(a, b);
        }
        a = 10;
        y();
    }
    x();
}
//z();

/*function x(){
    //var i = 1;

    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        }, 2000);
    }
    
    console.log("We ain't waiting!");
}
*/

// when we use let in above loop, it works fine because let is block scoped, everytime a new copy of i is made in each iteration.

// Working solution using var - using closures we create a new copy of i everytime
function x(){
    for(var i=1;i<=5;i++){
        function help(i){
            setTimeout(function(){
                console.log(i);
            }, i*2000);
        }
        help(i);
    }
    
    console.log("We ain't waiting!");
}

//x();


// Function Statement or Function Declaration

//a();
function a(){
    console.log("a called"); 
}


// Function Expression

//b();
var b = function(){
    console.log("b called");
}

// Difference between above two is hoisting

// Anonymous Function - without a name
//function(){

//}
// used in a place where functions are used as values
// like in above Function Expression


// Named Function Expression

var c = function abc(){
    console.log("c called");
}

//c();
//abc(); //gives an error, cause it is not in global scope

// First class functions - functions which are used inside other functions as arguments are called first class functions
// ability to be used as values
var e = function(param1){
    return function xyz(){

    }
}

console.log(e());

   /* Asynchronous JavaScript ⚡*/