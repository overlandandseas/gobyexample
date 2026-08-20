// JavaScript supports _constants_ of primitive values or references.
// They cannot be reassigned.


// `const` declares a constant value.
const s = "constant";
const n = 5000000000;
console.log(s, n);


// An object's values within a constant can still be modified.
const obj = { foo: 1 };
obj.foo = 2;
console.log(obj);
