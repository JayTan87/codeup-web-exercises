
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
let hoursAmazon,  hoursGoogle, hoursFacebook, totalAmazon, totalGoogle, totalFacebook, totalFinal;
hoursAmazon = 380.00
hoursGoogle = 400.00
hoursFacebook = 350.00
totalAmazon = userAmazon * hoursAmazon
totalGoogle = userGoogle * hoursGoogle
totalFacebook = userFacebook * hoursFacebook

totalFinal = totalAmazon + totalGoogle + totalFacebook

console.log("The total amount of pay you will receive is $" + totalFinal + ".00.");