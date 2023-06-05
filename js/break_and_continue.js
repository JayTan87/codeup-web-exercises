let userNumber = prompt("Please enter an odd number between 1 and 50.");
do {
    if(userNumber <= 50 && userNumber >=1) {

        for (let i = 1; i <= 50; i += 2) {
            console.log(`Here is an odd number: ${i}`);
        }
    }
}
while (userNumber <= 0 || userNumber >= 51);
if(userNumber <= 50 && userNumber >=1) {

    for (let i = 1; i <= 50; i += 2) {
        console.log(`Here is an odd number: ${i}`);
    }
}
    else {
    // do {
    //     alert(`Input is invalid. please try again`)
    //     userNumber = prompt("Please enter an odd number between 1 and 50.");
    // }
    // while (userNumber <= 0 || userNumber >= 51);

}
//     while(typeof userNumber !== "number") {
//         alert("Invalid input. Please enter a number.")
//      }
// }
// while(userNumber <= 0 || userNumber >= 51) {
//     alert("Number is outside expected range.");
// }