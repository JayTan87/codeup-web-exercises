// let numbers = [1,2,3];
// let product = 1;
// function returnProduct(numbers) {
// 	for(let i= 0; i < (numbers.length); i += 1) {
// 		product *= numbers[i];
// 	}
// 	return product;
// }
// console.log(returnProduct(numbers));
const salesData = [
	{
		month: 'January',
		totalItemsSold: 0
	},
	{
		month: 'February',
		totalItemsSold: 5
	},
	{
		month: 'March',
		totalItemsSold: 2
	},
	{
		month: 'April',
		totalItemsSold: 10
	},
	{
		month: 'May',
		totalItemsSold: 30
	}
];

let total=0
// function returnTotalSales(input) {
// 	for(let i=0; i < salesData.length; i += 1) {
// 		total += salesData[i].totalItemsSold;
// 	}
// 	return total;
// }
// console.log(returnTotalSales(salesData));

function returnTotalSales() {
	salesData.forEach((element) => {
		total += element.totalItemsSold;
	});

	return total;
}
console.log(returnTotalSales(salesData));