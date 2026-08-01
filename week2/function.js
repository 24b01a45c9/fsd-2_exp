"use strict";
// =====================================
// FUNCTIONS (No Parameters, No Return)
// =====================================
// Example 1
function displayMessage() {
    console.log("Welcome to TypeScript!");
}
displayMessage();
// Example 2
function showDate() {
    console.log("Today's Date: 25-07-2026");
}
showDate();
// Example 3
function thankYou() {
    console.log("Thank You!");
}
thankYou();
// =====================================
// FUNCTIONS WITH PARAMETERS
// =====================================
// Example 1 - One Parameter
function greet(name) {
    console.log("Hello " + name);
}
greet("vishnu");
// Example 2 - Two Parameters
function add(a, b) {
    console.log("Sum =", a + b);
}
add(10, 20);
// Example 3 - Three Parameters
function student(name, age, branch) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Branch:", branch);
}
student("vishnu", 20, "AIDS");
// =====================================
// FUNCTIONS WITH RETURN TYPES
// =====================================
// Example 1 - Number Return Type
function multiply(a, b) {
    return a * b;
}
console.log("Product =", multiply(5, 6));
// Example 2 - String Return Type
function welcome(name) {
    return "Welcome " + name;
}
console.log(welcome("vishnu"));
// Example 3 - Boolean Return Type
function isEligible(age) {
    return age >= 18;
}
console.log("Eligible to Vote:", isEligible(20));
