// JavaScript has built-in support for base64 encoding & decoding.



// Encoding a string.
const encodedData = btoa("Hello World");
console.log(encodedData);

// Decoding a string
const decodedData = atob(encodedData);
console.log(decodedData);

// We can also use a node.js buffer to encode/decode a string.
const bufferObj = Buffer.from("Howdy Friends", "utf8");

const base64String = bufferObj.toString("base64");

console.log(base64String);


// Decoding from buffer works the same way.
const encodedBuffer = Buffer.from(base64String, "base64");

const decodedString = encodedBuffer.toString("utf8");
console.log(decodedString);
