// =====================================
// Example 1 : any
// =====================================
let flexibleValue: any = 100;
console.log(flexibleValue);

flexibleValue = "Hello World";
console.log(flexibleValue);

flexibleValue = true;
console.log(flexibleValue);

// =====================================
// Example 2 : unknown
// =====================================
let mysteryValue: unknown = "TypeScript";

if (typeof mysteryValue === "string") {
    console.log("Length:", mysteryValue.length);
}

mysteryValue = 25;

if (typeof mysteryValue === "number") {
    console.log("Square:", mysteryValue * mysteryValue);
}

mysteryValue = false;

if (typeof mysteryValue === "boolean") {
    console.log("Boolean Value:", mysteryValue);
}

// =====================================
// Example 3 : void
// =====================================
function logNotification(message: string): void {
    console.log("ALERT:", message);
}

logNotification("Environment Setup Complete!");
logNotification("Database Connected!");
logNotification("Server Started!");

/*
return "Success"; // Error
*/