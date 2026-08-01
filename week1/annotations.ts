// =====================================
// Example 1
// =====================================
let movieTitle1: string = "Baahubali";
let releaseYear1: number = 2015;
let isBlockbuster1: boolean = true;

// =====================================
// Example 2
// =====================================
let movieTitle2: string = "RRR";
let releaseYear2: number = 2022;
let isBlockbuster2: boolean = true;

// =====================================
// Example 3
// =====================================
let movieTitle3: string = "Pushpa";
let releaseYear3: number = 2021;
let isBlockbuster3: boolean = true;

// Function with annotations
function getMovieStatus(title: string, year: number): string {
    return `${title} was released in ${year}`;
}

console.log(getMovieStatus(movieTitle1, releaseYear1));
console.log(getMovieStatus(movieTitle2, releaseYear2));
console.log(getMovieStatus(movieTitle3, releaseYear3));

// Array Annotation
let leadActors: string[] = [
    "Prabhas",
    "Ram Charan",
    "Allu Arjun"
];

console.log("Lead Actors:", leadActors.join(", "));

console.log("Baahubali Blockbuster:", isBlockbuster1);
console.log("RRR Blockbuster:", isBlockbuster2);
console.log("Pushpa Blockbuster:", isBlockbuster3);

/*
// Type Safety Check
movieTitle1 = 2015; // Error
*/
