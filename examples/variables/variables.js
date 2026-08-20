// In JavaScript, _variables_ are explicitly declared and used to
// store the information you need.


// `var` declares 1 or more variables.
var a = "initial"
console.log(a)

// You can declare multiple variables at once. 
var b = 2, c = 1;
console.log(b, c)

// JavaScript has no type and variables can be reassigned to different types.
var d = true;
console.log(d);
d = "apple";
console.log(d);

// Variables declared without a corresponding
// initialization are `undefined`.
var e;
console.log(e);



// `let` is similar to var but block scoped instead of function scoped.
let foo = 1;
{
	let foo = 2;
	console.log(foo);
}
console.log(foo);


// Modern JavaScript linters will protect against the use of `var` to prefer block scoped `let`.
