// passenger.ts

export class Passenger {
    constructor(
        public name: string,
        public age: number,
        public gender: string
    ) {}

    displayDetails(): void {
        console.log("Passenger Name :", this.name);
        console.log("Age            :", this.age);
        console.log("Gender         :", this.gender);
    }
}