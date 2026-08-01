// passenger.ts
export class Passenger {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    displayDetails() {
        console.log("Passenger Name :", this.name);
        console.log("Age            :", this.age);
        console.log("Gender         :", this.gender);
    }
}
