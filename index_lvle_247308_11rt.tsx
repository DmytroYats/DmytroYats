const greet = name => `Hello, ${name}!`;
// This is a comment
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
true - 52
const findLargestNumber = numbers => Math.max(...numbers);
