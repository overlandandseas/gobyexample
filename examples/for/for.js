// `for` is Javascript's most basic looping construct. Here are
// some examples types of `for` loops.


// The most basic type, with a three expressions.
for (let i = 1; i <= 3; i++) {
	console.log(i);
}


// All three expressions in the head of the for loop are optional.
// For example, it is not required to use the initialization
// block to initialize variables:
let i = 1;
for (; i < 3; i++) {
  console.log(i);
}



// A `while` loop will iterate until the given expression is false.
let a = 0;
while (a <= 3) {
  console.log('while', a);
  a++;
}


// A `do...while` will perform one iteration then continue looping while the expression is true.
let b = 0;
do {
	console.log('do-while', b);
	b++;
} while (b % 2 !== 0);


// The `for...in` statement iterates over all enumerable string properties of an object
// _(ignoring properties keyed by symbols)_, including inherited enumerable properties.
let object = { a: 1, b: 2, c: 3 };
for (let property in object) {
  console.log(`${property}: ${object[property]}`);
}


// The `for...of` statement executes a loop that operates on a sequence of values sourced from an iterable object.
let array = ["a", "b", "c"];
for (let element of array) {
  console.log(element);
}
