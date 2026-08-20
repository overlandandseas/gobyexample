// Use `process.exit` to immediately exit with a given
// status.


// `queueMicrotask`s will _not_ be run when using `process.exit`, so
// this `console.log` will never be called.
queueMicrotask(() => console.log("!"));

// Exit with status 3.
process.exit(3);
