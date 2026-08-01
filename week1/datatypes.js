"use strict";
// Example 1: String
let userName = "Alice";
console.log("User Name:", userName);
console.log("Type:", typeof userName);
// Example 2: Number
let userAge = 25;
let salary = 55000.75;
console.log("Age:", userAge);
console.log("Salary:", salary);
console.log("Type:", typeof userAge);
// Example 3: Boolean
let isMember = true;
let isAdmin = false;
console.log("Member:", isMember);
console.log("Admin:", isAdmin);
console.log("Type:", typeof isMember);
// Function
function displayUserProfile(name, age, active) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ? "Active" : "Inactive"}`);
}
displayUserProfile(userName, userAge, isMember);
displayUserProfile("Rahul", 30, false);
displayUserProfile("Sneha", 21, true);
/*
// Type Safety
userAge = "Twenty Five"; // Error
*/ 
