// Node.js provides straightforward tools for logging.
// The built-in `console` methods handle free-form output,
// and structured output can be done with `JSON.stringify`.

import { Writable } from "node:stream";


// Node implements `console.log` for standard functionality
// similar to `println` in other languages.
// `console` also has `.error`, `.info`, `.debug` and `.warn`
// to result in different styled output.
console.log("standard logger")


// Node specifically allows us direct access to
// `stdout` or `stderr` via the `process` object.
process.stdout.write("Buffer to write", err => {
	// The callback to execute when the data is fully written out.
	if (err) {
		console.log(err);
	}
});


// If we desire custom output targets, we can use `Writable` to
// specify where we would like to write to.
let bufContents = "";
const bufStream = new Writable({
	write(chunk, _enc, cb) {
		bufContents += chunk.toString(); cb();
	},
});
bufStream.write(
	`buf:${new Date().toISOString()} hello\n`
);
process.stdout.write(
	`from buflog:${bufContents}`
);

// Structured (JSON) logging
process.stderr.write(
	JSON.stringify({
		time: new Date().toISOString(),
		level: "INFO",
		msg: "hi there"
	}) + "\n"
);
