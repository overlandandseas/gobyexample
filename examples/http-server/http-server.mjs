// Writing a basic HTTP server is easy using the
// `http` package.

import http from "node:http";

// Create the server which takes a
// handler function as an argument.
const server = http.createServer((req, res) => {

	// The URL that was called
	console.log(req.url);

	// Write as the response to the request
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.write("This is the response");
	res.end();
});


// Starts the simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
	console.log('Listening on 127.0.0.1:3000');
});

