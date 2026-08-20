// [Environment variables](https://en.wikipedia.org/wiki/Environment_variable)
// are a universal mechanism for [conveying configuration
// information to Unix programs](https://www.12factor.net/config).
// Let's look at how to set, get, and list environment variables.


// To set an environment variable, we can set the value on `process.env`.
// To read we look at the value of it on `proces.env`.
process.env.FOO = "1";
console.log("FOO:", process.env.FOO)
console.log("BAR:", process.env.BAR)

// Use `process.env` to list all key/value pairs in the
// environment. This is how we return all the set keys
for (const [key] of Object.entries(process.env)) {
	console.log(key);
}
