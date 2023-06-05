"use strict"

function favoriteDayWeek() {
    let userFavoriteDay = prompt("What is your favorite day of the week?");
    if(userFavoriteDay == "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday" || "Sunday") {
        if(userFavoriteDay == "Monday") {
            alert("Monday message.");
        }
        else if(userFavoriteDay == "Tuesday") {
            alert("Tuesday message.");
        }
        else if(userFavoriteDay == "Wednesday") {
            alert("Wednesday message.");
        }
        else if(userFavoriteDay == "Thursday") {
            alert("Thursday message.");
        }
        else if(userFavoriteDay == "Friday") {
            alert("Friday message.");
        }
        else if(userFavoriteDay == "Saturday") {
            alert("Saturday message.");
        }
        else if(userFavoriteDay == "Sunday") {
            alert("Sunday message.");
        }
        else
            alert("Input is invalid. Please try again.")
    }

}
// function favoriteDayWeek() {
//     let userFavoriteDay = prompt("What is your favorite day of the week?");
//     switch (userFavoriteDay.toLowerCase()) {
//         case "mon":
//         case "monday":
//             alert("Monday message.");
//             break;
//         case "tue":
//         case "tuesday":
//             alert("Tuesday message.");
//             break;
//         case "wed":
//         case "wednesday":
//             alert("Wednesday message.");
//             break;
//         case "thurs":
//         case "thursday":
//             alert("Thursday message.");
//             break;
//         case "fri":
//         case "friday":
//             alert("Friday message.");
//             break;
//         case "sat":
//         case "saturday":
//             alert("Saturday message.");
//             break;
//         case "sun":
//         case "sunday":
//             alert("Sunday message.");
//             break;
//         default:
//             alert("Input is invalid. Please try again.")
//             break;
//     }
// }
favoriteDayWeek();
let input = prompt("Please enter a number.");
function numberOrNot(input) {
    return typeof input === "number" ? true : false;

}
alert(numberOrNot(input));
