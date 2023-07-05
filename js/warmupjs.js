// let numbers = [1,2,3];
// let product = 1;
// function returnProduct(numbers) {
// 	for(let i= 0; i < (numbers.length); i += 1) {
// 		product *= numbers[i];
// 	}
// 	return product;
// }
// console.log(returnProduct(numbers));
// const salesData = [
// 	{
// 		month: 'January',
// 		totalItemsSold: 0
// 	},
// 	{
// 		month: 'February',
// 		totalItemsSold: 5
// 	},
// 	{
// 		month: 'March',
// 		totalItemsSold: 2
// 	},
// 	{
// 		month: 'April',
// 		totalItemsSold: 10
// 	},
// 	{
// 		month: 'May',
// 		totalItemsSold: 30
// 	}
// ];
//
// let total=0
// function returnTotalSales(input) {
// 	for(let i=0; i < salesData.length; i += 1) {
// 		total += salesData[i].totalItemsSold;
// 	}
// 	return total;
// }
// console.log(returnTotalSales(salesData));
//
// let average
// function returnTotalSales() {
// 	salesData.forEach((element) => {
// 		total += element.totalItemsSold;
// 		average = total / (salesData.length);
// 	});
//
// 	return average;
// }
// console.log(returnTotalSales(salesData));
// Create a function, returnAdmins, that takes in an array of user objects
// and returns an array of only the admin user objects. Assume the array
// has at least one user object and all elements have an isAdmin property.
//
// 	Example:

// const users = [
//
// 	{
// 		username: 'fred123',
// 		password: 'letmein',
// 		email: 'fred123@email.com',
// 		isAdmin: true
// 	},
// 	{
// 		username: 'cindy123',
// 		password: 'hello123',
// 		email: 'cindy123@email.com',
// 		isAdmin: false
// 	},
// 	{
// 		username: 'kathy123',
// 		password: 'letmein',
// 		email: 'kathy123@email.com',
// 		isAdmin: true
// 	},
// 	{
// 		username: 'kyle123',
// 		password: 'letmein',
// 		email: 'kyle123@email.com',
// 		isAdmin: false
// 	}
// ]
//
// function returnAdmins(users) {
// let admins = [];
// 	for(let i = 0; i < users.length; i += 1) {
// 		if(users[i].isAdmin === true) {
// 		admins.push(users[i].username);
// 		}
// 	}
// 	return admins;
// }
// console.log(returnAdmins(users));
/*

returnAdmins(users) returns...

[

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    }
]

*/
// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable.
// 	If the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
// The function should return true if the neighborhood object is desireable and false otherwise.

// example data...
//
// 	const neighborhood1 = {
// 	neighborhood: "Lovely Estates",
// 	medianHomePrice: 280000,
// 	pool: true,
// 	tennis: false,
// 	crimeRate: "low",
// 	schools: 22
// };
//
// const neighborhood2 = {
// 	neighborhood: "Luminous Estates",
// 	medianHomePrice: 270000,
// 	pool: true,
// 	tennis: false,
// 	crimeRate: "high",
// 	schools: 24
// }
//
// const neighborhood3 = {
// 	neighborhood: "Oak Mountain",
// 	medianHomePrice: 290000,
// 	pool: false,
// 	tennis: false,
// 	crimeRate: "low",
// 	schools: 24
// }
//
// const neighborhood4 = {
// 	neighborhood: "Ginormous Acres",
// 	medianHomePrice: 350000,
// 	pool: true,
// 	tennis: true,
// 	crimeRate: "low",
// 	schools: 27
// }
//
// checkNeighborhood = (neighborhood) => {
// 	return ((neighborhood.medianHomePrice < 300000) && (neighborhood.crimeRate === "low") &&(neighborhood.schools >= 24)) ? true : false;
//
// }
// console.log(checkNeighborhood(neighborhood1),"false");
// console.log(checkNeighborhood(neighborhood2),"false");
// console.log(checkNeighborhood(neighborhood3), "true");
// console.log(checkNeighborhood(neighborhood4), "false");
// "use strict";
//
// // ========== Retrieve elements by id, class, tag name
//
// // id
//     const header = document.getElementById('main-title');
//     console.log(header);
//
// // class - will return an HTMLCollection
//     const cards = document.getElementsByClassName('card');
//     console.log(cards);
//     console.log(cards[0]);
//     // cards.pop(); // ERR/**/OR: Array specific method
//     const cardsArr = Array.from(cards); // convert HTMLCollection and NodeList to Array
//     cardsArr.pop();
//     console.log(cardsArr);
//
//
//
// // tag
//     const sections = document.getElementsByTagName('section');
//     console.log(sections);
//
//
// // ========== Query Selector and Query Selector All
//
// querySelector()
//
// const headerTitle = document.querySelector('header h1');
// const headerTitle = document.querySelector('#main-title');
// console.log(headerTitle);
//
// const li = document.querySelector('li'); // only returns first matching
// console.log(li);
//
// const lis = document.querySelectorAll('li'); // only returns first matching
// console.log(lis);
//
// const secondLi = document.querySelector('li:nth-child(2)');
// console.log(secondLi);
//
//
//
// // ========== Direct access to form inputs
//
//     const forms = document.forms;
//     console.log(forms['feedback-form'].feedback.value);
//
//
// // ========== Accessing and modifying elements and properties
//
// // get value of innerHTML
//     const heading = document.getElementById("main-heading");
//     console.log(heading);
//
//     console.log(heading.innerHTML);
//     console.log(heading.innerText);
//
// // set value of innerHTML
//     heading.innerHTML = "<em>Hi MOM!</em>";
//
// // set value of innerText
//     heading.innerText = "<em>Hi MOM!</em>";
//
// // append value to innerText (works the same with innerHTML)
//     heading.innerHTML += " ...and hi Mom!";
//
//
// // ========== Accessing and modifying attributes
//
// // check if attribute exists
//     const cowboy = document.getElementById('cowboy');
//     console.log(cowboy.hasAttribute('data-1'));
//
// // get an attribute value
//     console.log(cowboy.getAttribute('data-1'));
//
// // create a new attribute or change a value of an existing attribute
//     cowboy.setAttribute('data-1', 'hello');
//     cowboy.setAttribute('data-test', 'testing');
//     console.log(cowboy.getAttribute('data-1'));
//
// // remove attribute
//     cowboy.removeAttribute("data-test");
//     console.log(cowboy);
//
//
// // ========== Accessing and modifying styles
//
// // single style
//     const jumbotron = document.querySelector('.jumbotron');
//     jumbotron.style.display = "none";
//     jumbotron.style['font-family'] = "times";
//
// // apply multiple style changes
//     Object.assign(jumbotron.style, {
//         border: "10px solid black","font-family": "times", "text-decoration": "underline"
//     });
//
// // styling node list
//     const tableRows = document.getElementsByTagName("tr");
//     for (let i = 0; i < tableRows.length; i += 1) {
//         tableRows[i].style.background = "red";
//     }
//
//
// // ========== Add / Remove Elements
//
// // see curriculum links

// Write a function, returnLargestStudentCount, that takes in an array of classes returns the number of students in the largest class.
// Assume at least one class object will be present in the input array with students property set to a valid positive integer.

// let classes = [
// 	{class: "6th grade history", students: 18},
// 	{class: "7th grade history", students: 20},
// 	{class: "8th grade history", students: 22},
// 	{class: "4th grade history", students: 30},
// 	{class: "10th grade history", students: 25},
//
// ];
//
// returnLargestStudentCount = () => {
// 	let largestStudentCount;
// 	let classIds = classes.map(elements => {
// 		return elements.students;
// 	});
// 	console.log(Math.max(...classIds));
//
// }
//
//
// returnLargestStudentCount(classes); // returns 30
"use strict";

// https://developer.mozilla.org/en-US/docs/Web/Events

// ==========================  Simple Example

// When a user clicks the test button, log "test" in the console. (with pre-built function or anon function)
const testBtn = document.getElementById('test-btn');
// testBtn.addEventListener('mouseover', () =>  {
// 	console.log('test');
// });

		function logTest() {
			console.log('test');
		}
 testBtn.addEventListener('click', logTest)
// remove event listener

// testBtn.removeEventListener("click", logTest);



// ==========================  Register Additional Events

/* When a cursor hovers over the h1, change the text color, font-family, and make larger.

    1.  target the node
    2.  add event listener for mouseover event to target
    3.  in listener change styling for paragraph

 */
let changeStyle =() => {
	h1.style.color = "red";
	h1.style.fontFamily = "fantasy";
	h1.style.fontSize = "10em";
}

const h1 =document.getElementsByTagName('h1')[0];
h1.addEventListener('mouseover', changeStyle);
// When double-clicking the restore text button, make the h1 font size 2em
const textBtn=document.getElementById('shrink-btn');

textBtn.addEventListener('dblclick', () => {
	h1.style.fontSize='2em';
})

// ==========================  Event Object

// document.addEventListener("click", (e) => {
//    console.log(e);
// });


// document.addEventListener("click", (e) => {
//
//    let red = e.screenX % 256;
//    let green = e.screenY % 256;
//    let blue = "ff";
//
//    console.log(e.screenX);
//    console.log(e.screenY);
//
//    red = red.toString(16);
//    green = green.toString(16);
//
//    document.body.style['background-color'] = "#" + red + green + blue;
//
// });

// ==========================  Keyboard Events and Prevent Default

// document.addEventListener("keypress", (e) => {
//     console.log(e.code);
//     if (e.code === "Space") {
//         alert('HELLO!');
//         // e.preventDefault();
//     }
// });


// ==========================  e.target

// *** see additional example