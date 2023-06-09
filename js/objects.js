(function() {
	"use strict";

	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */
// const person = {};
// person.firstName = "Jeremy";
// person.lastName = "Tanner";
// console.log(person.firstName);
// console.log(person.lastName);
	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */
// person.sayHello = () => {
// 	return (`Hello from ${this.firstName} ${this.lastName}!`);
// }
// person.sayHello();
	/** TODO:
	 * HEB has an offer for the shoppers that buy products amounting to
	 * more than $200. If a shopper spends more than $200, they get a 12%
	 * discount. Write a JS program, using conditionals, that logs to the
	 * browser, how much Ryan, Cameron and George need to pay. We know that
	 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
	 * display a line with the name of the person, the amount before the
	 * discount, the discount, if any, and the amount after the discount.
	 *
	 * Uncomment the lines below to create an array of objects where each object
	 * represents one shopper. Use a foreach loop to iterate through the array,
	 * and console.log the relevant messages for each person
	 */
	const discountPercent = .12;
	let shoppers = [
		{name: 'Cameron', amount: 180},
		{name: 'Ryan', amount: 250},
		{name: 'George', amount: 320}
	];
	let discountCalculator = (name, amount) => {
		if(amount > 200) {
			let shoppersTotal = (amount -(amount * discountPercent));
			return (`${name} your order total is ${amount} qualifies for a ${discountPercent * 100}% discount your new total is ${shoppersTotal}!`);
		}
		else {
			return (`Sorry, ${name} your amount of ${amount} does not qualify for a discount. Your total is ${amount}`);
		}
	}

shoppers.forEach(function (shopper) {
	console.log(discountCalculator(shopper.name, shopper.amount));
	}
);
	/** TODO:
	 * Create an array of objects that represent books and store it in a
	 * variable named `books`. Each object should have a title and an author
	 * property. The author property should be an object with properties
	 * `firstName` and `lastName`. Be creative and add at least 5 books to the
	 * array
	 *
	 * Example:
	 * > console.log(books[0].title) // "The Salmon of Doubt"
	 * > console.log(books[0].author.firstName) // "Douglas"
	 * > console.log(books[0].author.lastName) // "Adams"
	 */
	let books = [
		{
			title: "The Salmon of Doubt",
			author: {
				firstName: "Douglas",
				lastName: "Adams"
			}
		},
		{
			title: "The Theory of Evolution",
			author: {
				firstName: "Charles",
				lastName: "Darwin"
			}
		},
		{
			title: "The Book",
			author: {
				firstName: "Bill",
				lastName: "Smith",
			}
		},
		{
			title: "Animals and Stuff",
			author: {
				firstName: "Steve",
				lastName: "Erwin"
		}
		},
		{
			title: "Return of the Book",
			author: {
				firstName: "Roger",
				lastName: "Wilson"
			}
		}
		];
	books.forEach((book,index) => {
		console.log(`Book #${index + 1}`);
		console.log(`Title: ${book.title}`);
		console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
		if(index < books.length -1) {
			console.log(`---`);
		}
	})
// let books = [bookA, bookB, bookC, bookD, bookE];


	/**
	 * TODO:
	 * Loop through the books array and output the following information about
	 * each book:
	 * - the book number (use the index of the book in the array)
	 * - the book title
	 * - author's full name (first name + last name)
	 *
	 * Example Console Output:
	 *
	 *      Book # 1
	 *      Title: The Salmon of Doubt
	 *      Author: Douglas Adams
	 *      ---
	 *      Book # 2
	 *      Title: Walkaway
	 *      Author: Cory Doctorow
	 *      ---
	 *      Book # 3
	 *      Title: A Brief History of Time
	 *      Author: Stephen Hawking
	 *      ---
	 *      ...
	 */
function createBook(title, authorFirstName, authorLastName) {
		return {
			title: title,
			author: {
				firstName: authorFirstName,
				lastName: authorLastName
			}
		}
		let books = [createBook("The Salmon of Doubt", "Douglas", "Adams"),
			createBook("The Theory of Evolution", "Charles", "Darwin"),
			createBook("The Book", "Bill", "Smith"),
			createBook("Animals and Stuff", "Steve", "Erwin"),
			createBook("Return of the Book", "Roger", "Wilson"),
		];

		books.push(createBook())

		function showBooksInfo(book) {
			console.log(`Title: ${title}`);
			console.log(`Author: ${books.author.firstName} ${books.author.lastName}`);
		}

		showBooksInfo(books);
		// * Bonus:
		// * - Create a function named `createBook` that accepts a title and author
		// *   name and returns a book object with the properties described
		// *   previously. Refactor your code that creates the books array to instead
		// *   use your function.
		// * - Create a function named `showBookInfo` that accepts a book object and
		// *   outputs the information described above. Refactor your loop to use your
		// *   `showBookInfo` function.
		// */
// let books = [];
// let i= 0;
// do {
// 	let userTitle = prompt("Please enter the title for the book.");
// 	let userInputAuthor = prompt("Please enter the first and last name of the author.");
// 	let createBook = (userTitle, userInputAuthor) => {
// 		let userString = userInputAuthor.toString();
// 		// console.log(userString);
// 		let userAuthor = userString.split(" ");
// 		return {
// 			// index: i,
// 			title: userTitle,
// 			author: {
// 				firstName: userAuthor[0],
// 				lastName: userAuthor[userAuthor.length - 1]
// 			}
// 		};
// 	}
// 	i++;
//
// 	let userResponse = confirm("Would you like to enter another book?")
// 	if(userResponse === true) {
// 		books = [createBook()]
// 		console.log(books);
// 	}
// 	else
// 		break;
// 	// books.forEach(function(book) {
// 	// 	console.log(createBook(book.title, book.author.firstName));
//
// 	// })
// } while(true);

		// let userConfirm =confirm("Would you like to add another book?");
		// if (confirm === false) {
		// 	// break;
		// }
		//
		// let userContinue = prompt("Would you like to add another book?");


		// console.log(newBook.author.firstName, newBook.author.lastName)
	}
});