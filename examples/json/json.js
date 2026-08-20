// JavaScript has first class support for JSON. 


// `JSON.strinfy()` can take any _JSON compatible type_
// and turn this into a `JSON` string.
let json = JSON.stringify("bare string");
console.log(json);

// Arrays are valid _JSON_ types.
json = JSON.stringify([1, 2]);
console.log(json);

// Only objects will begin the JSON string with curly braces.
json = JSON.stringify({ name: "John" });
console.log(json);


// This supports parameters to adjust the indentation.
json = JSON.stringify({ name: "Sarah" }, 4, 4);
console.log(json);

// `undefined` values are omitted, but `null` is kept as `null`.
json = JSON.stringify({
	name: null,
	occupation: undefined,
	title: "Engineer"
});
console.log(json);


// `JSON.parse()` is used to parse strings of _JSON_ into
//  JavaScript objects.
let obj = JSON.parse(
	'{"name": "Frank", "favoriteFood": "Tacos"}'
);
console.log("obj.name", obj.name);
