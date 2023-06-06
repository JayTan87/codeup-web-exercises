//multiplication table
let userInput = prompt("Please enter a number to receive its multiplication table.");
function showMultiplicationTable(userInput) {
    for (let i = 1; i <= 10; i++) {
        let number = parseInt(userInput);
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
showMultiplicationTable(userInput);

//Even and Odd
for (let i = 0; i < 10; i++) {
    function getRando(minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    }
    let random = getRando(20, 200);
    if (random % 2 === 0) {
     console.log(`${random} is even.`);
    }
    else
     console.log(`${random} is odd.`);
}
//Number pattern
// for (let i = 1; i < 10; i++ ) {
//     for(let n = 1; n <= i; n++) {
//        console.log(i);
//     }
// }

//Number pattern
for(let i=1; i < 10; i++) {
    console.log(`${i.toString().repeat(i)}`);
}

//100 countdown
for (let x = 0; x <= 20; x++) {
    console.log(100 - (x*5));
}