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