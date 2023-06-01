
let userInput = prompt("Please enter a number to receive its multiplication table.");
function showMultiplicationTable(userInput){
   let number = parseInt(userInput);
   //let one = number * 1;
    console.log(number + " * 1 = " + (number * 1));
    console.log(number + " * 2 = " + (number * 2));
    console.log(number + " * 3 = " + (number * 3));
    console.log(number + " * 4 = " + (number * 4));
    console.log(number + " * 5 = " + (number * 5));
    console.log(number + " * 6 = " + (number * 6));
    console.log(number + " * 7 = " + (number * 7));
    console.log(number + " * 8 = " + (number * 8));
    console.log(number + " * 9 = " + (number * 9));
    console.log(number + " * 10 = " + (number * 10));

}
showMultiplicationTable(userInput);

for (let i = 1; i < 11; i++) {
    let minNumber = 20;
    let maxNumber = 200;
    function getRando(minNumber, maxNumber) {
        return Math.random() * (maxNumber - minNumber) + minNumber;
        //return random;
    }
    let random = getRando(minNumber, maxNumber);
    let wholeNumber = random.toFixed(0);
    let isEven = wholeNumber % 2 === 0;
    if (isEven) {
     console.log(`${wholeNumber} is even.`);
    }
    else
     console.log(`${wholeNumber} is odd.`);
}
for (let i = 1; i < 10; i++ ) {
    for(let n = 1; n <= i; n++) {
       console.log(i);
    }

}