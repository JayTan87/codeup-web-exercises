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


const users = [

	{
		username: 'fred123',
		password: 'letmein',
		email: 'fred123@email.com',
		isAdmin: true
	},
	{
		username: 'cindy123',
		password: 'hello123',
		email: 'cindy123@email.com',
		isAdmin: false
	},
	{
		username: 'kathy123',
		password: 'letmein',
		email: 'kathy123@email.com',
		isAdmin: true
	},
	{
		username: 'kyle123',
		password: 'letmein',
		email: 'kyle123@email.com',
		isAdmin: false
	}
]

function returnAdmins(users) {
let admins = [];
	for(let i = 0; i < users.length; i += 1) {
		if(users[i].isAdmin === true) {
		admins.push(users[i].username);
		}
	}
	return admins;
}
console.log(returnAdmins(users));
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
