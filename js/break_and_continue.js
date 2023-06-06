let userNumber
do {
    userNumber = prompt("Please enter an odd number between 1-50?");
    if(userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0) {
        alert("Number entered is outside the acceptable range or an even number. Please try again.");
    }
    else
        break;
} while (userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0);
for (let i = 1; i <= 50; i += 2) {
    if(i == userNumber) {
        console.log(`Yikes! Skipping over: ${userNumber}`);
        continue;
    }
    console.log(`There is an odd number: ${i}.`);
}
