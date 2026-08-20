// `if` / `else` blocks in JavaScript are essential for branching on conditionals.

// Here's a basic example.
if (7 % 2 === 0) {
	console.log("7 is even");
} else {
	console.log("7 is odd");
}

// You can have an `if` statement without an else.
if (8 % 4 === 0) {
	console.log("8 is divisible by 4");
}

// Logical operators like `&&` and `||` are often
// useful in conditions.
if (8 % 2 === 0 || 7 % 2 === 0) {
	console.log("either 8 or 7 are even");
}

// The parenthesis is always required, but the
// curly braces are optional for one line statements.
if (5 < 3)
	console.log("5 is less than 3");
else
	console.log("5 is not less than three");

// JavaScript also supports ternary operations
let a = 9 % 2 === 0 ? "even" : "odd";
console.log(a);

// The expression within the `if` statement does not have to be a `boolean`. Any `truthy` value will do
let b = "String";
if (b) {
	console.log(b, "is truthy");
} else {
	console.log(b, "is falsey");
}
