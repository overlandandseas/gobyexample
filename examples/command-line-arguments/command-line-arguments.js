// [_Command-line arguments_](https://en.wikipedia.org/wiki/Command-line_interface#Arguments)
// are a common way to parameterize execution of programs.
// For example, `node hello.js` uses
// `hello.js` as an argument to the `node` program.


// `process.argv` provides access to raw command-line
// arguments. Note that the first value in this array
// is the path to the program.
const argsWithProg = process.argv;
const [_, ...argsWithoutProg] = process.argv;

// You can get individual args with normal indexing.
const arg = process.argv[3];

console.log(argsWithProg);
console.log(argsWithoutProg);
console.log(arg);
