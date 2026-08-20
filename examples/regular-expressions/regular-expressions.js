// JavaScript offers built-in support for [regular expressions](https://en.wikipedia.org/wiki/Regular_expression).
// Here are some examples of common regexp-related tasks.


// There are two ways to create a _Regular Expression_ object:


// The Literal notation takes a pattern between two slashes,
// followed by optional [flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags),
// after the second slash.
const a = /p([a-z]+)ch/g;


// The _constructor function_ takes either a string or
// an existing `RegExp` object, the flags are the second parameter.
const b = new RegExp("p([a-z]+)ch", "i");
const c = new RegExp(/p([a-z]+)ch/, "i");

// In JavaScript these are all equivalent. 
// To test against a string we can call `.test()`.
console.log(a.test("peach"));

// Using a regular expression to change data format in a string.
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr);

// Splitting lines with different line endings.
const text =
  "Some text\nAnd some more\r\nAnd yet\nThis is the end";
const lines = text.split(/\r?\n/);
console.log(lines); 
