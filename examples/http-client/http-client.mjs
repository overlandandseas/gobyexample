// Node.js has support for fetching requests similar
// to the browser functionality using `fetch()`

// Issue an HTTP GET request to a server. `fetch()` is a
// convenient shortcut. The implementation is based upon _undici_,
//  an HTTP/1.1 client written from scratch for Node.js. 
const res = await fetch(
	"https://jsonplaceholder.typicode.com/posts"
);

// Print the HTTP response status.
console.log("Response status:", res.status);

// Print the output of the JSON response
const data = await res.json();
console.log(data);

