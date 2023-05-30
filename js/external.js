"use strict"
alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color?");
console.log("Great, " + userInput + " is my favorite color too!");

//Movie rental problem
let userNumDays = prompt("How many days will you have books checked out?");
const moviePrice = 3.00;
let result = userNumDays * moviePrice;
console.log("The amount you will have to pay is $" + result + ".00.");

//Contractor pay problem
let userAmazon = prompt("How many hours did you work for Amazon?");
let userGoogle = prompt("How many hours did you work for Google?");
let userFacebook = prompt("How many hours did you work for FaceBook?");
let payRateAmazonDollars, payRateGoogleDollars, payRateFacebookDollars, totalAmazon, totalGoogle, totalFacebook, totalFinal;
payRateAmazonDollars = 380.00;
payRateGoogleDollars = 400.00;
payRateFacebookDollars = 350.00;
totalAmazon = userAmazon * payRateAmazonDollars;
totalGoogle = userGoogle * payRateGoogleDollars;
totalFacebook = userFacebook * payRateFacebookDollars;

totalFinal = totalAmazon + totalGoogle + totalFacebook

console.log("The total amount of pay you will receive is $" + totalFinal + ".00.");

//Student enrollment problem
let isNotFull = true;
let noConflict = true;
let enrollStudent = false;
if (isNotFull && noConflict) {
    enrollStudent = true;
}
console.log("Student is able to enroll: " + enrollStudent);

//Product Offer problem
let userNumberOfItems = prompt("How many items are you purchasing?")
if (userNumberOfItems >= 2) {
    userNumberOfItems = true;
}
let offerNotExpired = true;
let premMem = true;
let prodOff = false;
if ((userNumberOfItems && offerNotExpired) || (premMem && offerNotExpired)) {
    prodOff = true;
}
console.log("Customer qualifies for discount: " + prodOff);