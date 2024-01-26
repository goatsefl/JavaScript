console.log({ name: "john" });
document.write({ name: "sriram" });
// alert({ name: "swaroop" });

/* var vs let

    var:

        Function Scope: Variables declared with var are function-scoped. They are visible throughout the entire function, regardless of where they are declared within the function.
        Hoisting: Variables declared with var are hoisted to the top of their scope during the compilation phase, which means they are moved to the top of the function or global scope before the code is executed.
        Re-declaration: Variables declared with var can be re-declared within the same scope without causing an error.

    let:

        Block Scope: Variables declared with let are block-scoped. They are only accessible within the block (enclosed by curly braces) where they are defined.
        Hoisting: Variables declared with let are hoisted to the top of their block but are not initialized until the actual declaration is encountered during execution. This is known as the "temporal dead zone."
        Re-declaration: Variables declared with let cannot be re-declared within the same block scope.

 */

/* Example */


/* let x = 10;
if(x!=0){
    let y = 20; 
    console.log(x); //Accessible 
}

console.log(y); //cannot access.

 */

/* const:

    Constant value
    Blocked Scope
    No-Hoisting
    Object properties

*/

let firstName = "swaroop";
let lastName = "ch";
let address = "Main Street";

address  = "first street";

console.log(firstName);
console.log(lastName)
console.log(address);


let street = "Gandhi Nagar";
let country = "India";

let fullMailingAddress = street + " " + country;

console.log(fullMailingAddress);



// Challenge 2


let score1 = 90;
let score2 = 50;
let score3 = 30;

let average = (score1 + score2 + score3)/3;
let totalScore = score1+score2+score3;

console.log(average + "\n" + totalScore);

// Challenge 3

let plates = 20;
let people = 7;
let rPlates = plates - people;
console.log("There are " + ++rPlates + " plates available");

// Challenge 4 Array

const fruits = ['strawberry','muskmelon','apple','banana','coconut',87];

let fruit1 = fruits[0];

fruits[5] = "dragon-fruit";

console.log(fruits);
console.log(fruit1);



// Function


function helloFriends(){
    console.log("hello nagraj")
    console.log("hello natraj")
    console.log("hello rajamannar")
}


helloFriends();
 
// Functions with parameters

// if nothing is passed, it'll be declared as undefined
// but the logic will still run as the function is invoked


function heyFriends(name,name2){  // name and name2 are called parameters
    console.log("Hey! how are you " + name);
    console.log("I'm fine, what about you " + name2);
}
let anna = "annavaram";
heyFriends("Anapurna",anna);
heyFriends("Gilgamesh","Anapurna");// "Gilgamesh" & "Anapurna" are arguments sent to the heyFriends()
heyFriends("Shyaam","Raju");

// Arrays, Objects and functions

const wallHeight = 100;

function arEa(something){
    console.log("There area of the Wall is :" + something * 2.54);
    console.log("There area of the dimensions are :" + something * 2.54);
    
}

let width  = arEa(149);
let height = arEa(wallHeight);

let dimensions = [width,height];
console.log(dimensions); // this will show undefined as the function did not return anything.


function returnArea(something){
    console.log("There area of the Wall is :" + something * 2.54);
    console.log("There area of the dimensions are :" + something * 2.54);

    return something;
}

let width1  = returnArea(149);
let height1 = returnArea(wallHeight);

dimensions = [width1, height1];
console.log(dimensions) // Now the something will be returned. 
// output : [149,100] 
// The array dimensions will not be undefined

// Function expression is a way to express functions in different ways using variables.

// Eg:

function newFunction(value1, value2){
    return value1*value2;
}

let multiply = function(value1,value2){
    return value1 * value2;
}

let mul = [multiply(2,3), multiply(5,2)]
console.log(mul); // output [6,10]

// Another way of using function expression, introduced in ES6.
// Arrow functions

let valueArrow = (value1,value2) => value1 + value2;
console.log(valueArrow(3,6));// Output : 9 

// Function Challenge

function calculateTotal(subTotal, tax){
    return subTotal + tax;
}

let order1 = calculateTotal(7999,1299); 
let order2 = calculateTotal(41999,12323);
let order3 = calculateTotal(1233,11223);

console.log(order1,order2,order3);

    let newCalculate = function(subTotal, tax) {
        return subTotal + tax;
    };

console.log(newCalculate(38841,12333133));


