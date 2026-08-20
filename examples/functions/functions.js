// _Functions_ are one of the core building blocks of JavaScript.


// Here's a function that takes two `parameters` and returns
// their sum.
function plus(a, b) {

	// JavaScript requires explicit returns.
	// By default, a function will return `undefined`.
	return a + b;
}


// Call a function with `name(args)`.
let res = plus(1, 2)
console.log("1+2 =", res);


// Because JavaScript does not define types,
// we can use the same function for multiple types.
res = plus("foo", "bar");
console.log("foo+bar=", res);


// Function definitions may specify a default value.
// This is also known as an optional parameter
function plusPlus(a, b, c = 5) {
	return a + b + c
}


// Optional parameters do not need to be specified
// but will be overridden when present
res = plusPlus(1, 2, 3);
console.log("1+2+3 =", res);

res = plusPlus(1, 2);
console.log("1+2+5=", res);


// Function definitions are hoisted within the file.
// We can call a function before its definition.
hello();

function hello() {
	console.log("Hello");
}


// Functions can be assigned as values, they can also be defined without a name. This makes them first class citizens.
const greet = function(name) {
	console.log("Howdy,", name);
}
greet("Chosen Undead");


// _Arrow Functions_ can be created using the `=>` shorthand.
const print = (parameter) => {
	console.log(parameter);
}

// The `arguments` keyword exists inside each function and contains an _array-like_ list of the arguments passed in.
function printAll() {
	console.log(arguments);
}
printAll("a", "b", "c");


// _Rest parameters_ are the remaining arguments combined into an array
function restParams(one, two, ...rest) {
	console.log(one, two);
	console.log("rest:", rest);
}
restParams("a", "b", "c", "d");
