// Switch statements evaluate expressions and match to a specific case.


// Here's a basic `switch` statement.
// `break` is required in order to not fall into the below case.
let i = 2;
let str = "Write " + i + " as ";
switch (i) {
	case 1:
		str += "one";
		break;
	case 2:
		str += "two";
		break;
	case 3:
		str += "three"
		break;
}
console.log(str);

// Another example using `default` to handle any case not matched.
const whatAmI = i => {
	switch (typeof i) {
		case "boolean":
			console.log("I'm a bool");
			break;
		case "number":
			console.log("I'm a number");
			break;
		case "string":
			console.log("I'm a string");
			break;
		default:
			console.log("Don't know type", typeof i);
	}
}
whatAmI(true);
whatAmI(1);
whatAmI("hey");
whatAmI(null);
