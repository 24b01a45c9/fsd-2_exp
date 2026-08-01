// Example 1: Arrow Function for Addition

const add = (a: number, b: number): number => {
    return a + b;
};

console.log("Sum =", add(10, 20));


// Example 2: Arrow Function for Greeting

const greet = (name: string): string => {
    return "Welcome " + name;
};

console.log(greet("vishnu"));


// Example 3: Arrow Function for Eligibility

const isEligible = (age: number): boolean => {
    return age >= 18;
};

console.log("Eligible to Vote:", isEligible(20));