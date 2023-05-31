"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
let userSelectedColor = prompt ("What is your favorite color?");
// function analyzeColor(userSelectedColor) {
//     if (userSelectedColor === "red") {
//         console.log("Strawberries are red");
//     }
//     else if (userSelectedColor === "blue") {
//         console.log("The sky is blue");
//     }
//     else if (userSelectedColor === "yellow") {
//         console.log("Sunflowers are yellow");
//     }
//     else if (userSelectedColor === "black") {
//         console.log("Something about black");
//     }
//     else if (userSelectedColor === "green") {
//         console.log("Grass is green");
//     }
//     else
//         console.log("I don't know anything about this color");
//
// }
// analyzeColor(userSelectedColor);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log("The color you selected was " + userSelectedColor + ". Your random generated color is " + randomColor + ". ");
analyzeColor(randomColor);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//let userSelectedColor = prompt ("What is your favorite color?");
function analyzeColor(userSelectedColor) {
    switch (userSelectedColor) {
        case "red":
            console.log("Strawberries are red");
            break;
        case "blue":
            console.log("The sky is blue");
            break;
        case "yellow":
            console.log("Sunflowers are yellow");
            break;
        case "black":
            console.log("Something about black");
            break;
        case "green":
            console.log("Grass is green");
            break;
        default:
            console.log("I don't know anything about this color");
            break;

    }

}
analyzeColor(userSelectedColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// (function(color) {
//     let userSelectedColor =  prompt("Please select a color.")
    //let result = analyzeColor(userSelectedChoice)
    //alert("Your color " + analyzeColor(userSelectedColor));
//})
alert(analyzeColor(userSelectedColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalBill){
    switch(luckyNumber) {
        case 0:
            let amountDue = totalBill;
        console.log("Sorry your lucky number " + luckyNumber + " does not qualify for a discount. Your total is " + totalBill + ".");
            break;
        case 1:
            let discountAmount = .10;
            amountDue = totalBill - (totalBill * discountAmount);
            console.log("Congratulations, your lucky number of " + luckyNumber + " qualifes for a 10% discount. Your total is " + amountDue + ".");
            break;
        case 2:
            discountAmount = .25;
            amountDue = totalBill - (totalBill * discountAmount);
            console.log("Congratulations, your lucky number of " + luckyNumber + " qualifes for a 25% discount. Your total is " + amountDue + ".");
            break;
        case 3:
            discountAmount = .35;
            amountDue = totalBill - (totalBill * discountAmount);
            console.log("Congratulations, your lucky number of " + luckyNumber + " qualifes for a 35% discount. Your total is $" + amountDue + ".");
            break;
        case 4:
            discountAmount = .50;
            amountDue = totalBill - (totalBill * discountAmount);
            console.log("Congratulations, your lucky number of " + luckyNumber + " qualifes for a 50% discount. Your total is $" + amountDue + ".");
            break;
        case 5:
            discountAmount = 0;
            amountDue = discountAmount;
            console.log("Congratulations, your lucky number of " + luckyNumber + " qualifes for a 100% discount. Your total is items are free!.");
            break;
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */