"use strict";
// Generic Variable (using a generic type)
let value = 100;
console.log("Generic Variable:", value);
// Generic Function
function display(data) {
    return data;
}
console.log("Number:", display(10));
console.log("String:", display("Hello"));
// Generic Constraint
function printLength(item) {
    console.log("Length:", item.length);
}
printLength("TypeScript");
printLength([10, 20, 30]);
