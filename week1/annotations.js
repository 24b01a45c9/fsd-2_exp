"use strict";
// =====================================
// Example 1
// =====================================
let movieTitle1 = "Baahubali";
let releaseYear1 = 2015;
let isBlockbuster1 = true;
// =====================================
// Example 2
// =====================================
let movieTitle2 = "RRR";
let releaseYear2 = 2022;
let isBlockbuster2 = true;
// =====================================
// Example 3
// =====================================
let movieTitle3 = "Pushpa";
let releaseYear3 = 2021;
let isBlockbuster3 = true;
// Function with annotations
function getMovieStatus(title, year) {
    return `${title} was released in ${year}`;
}
console.log(getMovieStatus(movieTitle1, releaseYear1));
console.log(getMovieStatus(movieTitle2, releaseYear2));
console.log(getMovieStatus(movieTitle3, releaseYear3));
// Array Annotation
let leadActors = [
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
