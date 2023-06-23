let numbers = [1,2,3];
let product = 1;
function returnProduct(numbers) {
	for(let i= 0; i < (numbers.length); i += 1) {
		product *= numbers[i];
	}
	return product;
}
console.log(returnProduct(numbers));
