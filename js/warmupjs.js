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
