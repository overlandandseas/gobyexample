// Branching with `if` and `else` in Javascript is
// straight-forward.


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

// The parenthesis are always required, but the
// curly braces are optional for one line statements.
if (5 < 3)
	console.log("5 is less than 3");
else
	console.log("5 is not less than three");

// Javascript also supports ternary operations
let a = 9 % 2 === 0 ? "even" : "odd";
console.log(a);
