// A _closure_ is the combination of a function bundled
// together (enclosed) with references to its surrounding
// state (the _lexical environment_). In other words, a closure
// gives a function access to its outer scope. In JavaScript,
// closures are created every time a function is created, at
// function creation time.


// `myFunc` is a reference to the instance of the
// function `displayName` that is created when `makeFunc` is run.
// The instance of `displayName` maintains a reference to its
// _lexical environment_, within which the variable name exists.
function makeFunc() {
	const name = "jsbyexample";
	function displayName() {
		console.log(name);
	}
	return displayName;
}

const myFunc = makeFunc();
myFunc();



// We have defined a function `makeAdder(x)``,
// that takes a single argument `x`, and returns a new function.
// The function it returns takes a single argument `y`,
// and returns the sum of `x` and `y`.
function makeAdder(x) {
	return function(y) {
		return x + y;
	};
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
