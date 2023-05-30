"use strict"
alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color?");
console.log("Great, " + userInput + " is my favorite color too!");

let userDays = prompt("How many days will you have books checked out?");
let moviePrice = 3.00
let result = userDays * moviePrice
console.log("The amount you will have to pay is $" + result + ".00.");

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

let isNotFull = true;
let noConflict = true;
let enrollStudent = isNotFull && noConflict;

let userNumberOfItems = prompt("How many items are you purchasing?")
if (userNumberOfItems >= 2) {
    atLeastTwo = true;
}
let offerNotExpired = true;
let premMem = true
let prodOff
prodOff = (atLeastTwo && offerNotExpired) || premMem;