"use strict"

// function favoriteDayWeek() {
//     let userFavoriteDay = prompt("What is your favorite day of the week?");
//     if(userFavoriteDay == "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday" || "Sunday") {
//         if(userFavoriteDay == "Monday") {
//             alert("Monday message.");
//         }
//         else if(userFavoriteDay == "Tuesday") {
//             alert("Tuesday message.");
//         }
//         else if(userFavoriteDay == "Wednesday") {
//             alert("Wednesday message.");
//         }
//         else if(userFavoriteDay == "Thursday") {
//             alert("Thursday message.");
//         }
//         else if(userFavoriteDay == "Friday") {
//             alert("Friday message.");
//         }
//         else if(userFavoriteDay == "Saturday") {
//             alert("Saturday message.");
//         }
//         else if(userFavoriteDay == "Sunday") {
//             alert("Sunday message.");
//         }
//         else
//             console.log("Input is invalid. Please try again.")
//     }
//
// }
function favoriteDayWeek() {
    let userFavoriteDay = prompt("What is your favorite day of the week?");
    switch(userFavoriteDay == ("Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday" || "Sunday")) {
                case "Monday":
                    alert("Monday message.");
                    break;
                case "Tuesday":
                    alert("Tuesday message.");
                    break;
                case "Wednesday":
                    alert("Wednesday message.");
                    break;
                case "Thursday":
                    alert("Thursday message.");
                    break;
                case "Friday":
                    alert("Friday message.");
                    break;
                case "Saturday":
                    alert("Saturday message.");
                    break;
                case "Sunday":
                    alert("Sunday message.");
                    break;
                default:
                console.log("Input is invalid. Please try again.")
                break;
    }
}
favoriteDayWeek();