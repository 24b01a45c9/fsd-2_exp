// Generic Variable (using a generic type)
let value: number = 100;
console.log("Generic Variable:", value);

// Generic Function
function display<T>(data: T): T {
    return data;
}

console.log("Number:", display<number>(10));
console.log("String:", display<string>("Hello"));

// Generic Constraint
function printLength<T extends { length: number }>(item: T): void {
    console.log("Length:", item.length);
}

printLength("TypeScript");
printLength([10, 20, 30]);