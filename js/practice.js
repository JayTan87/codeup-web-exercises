let numberA = 10;
let numberB = 2;
let numberC = 12;

function sumIsEqual(numberA, numberB, numberC) {
	if (numberA !== null || numberB !== null || numberC !== null) {
		if (typeof numberA !== "boolean" && numberB !== "boolean" && numberC !== "boolean") {
			if (!isNaN(numberA) && !isNaN(numberB) && !isNaN(numberC)) {
				return (numberA + numberB) === numberC;
			} else
				return false;

}
		return false;
	}
	return false;
}
// sumIsEqual(numberA, numberB, numberC)

// function sumIsEqual(input1, input2, input3) {
// 	if(typeof input1 !== "number" || input2 !== "number" || input3 !== "number"){
// 		return false;
// 	}
// 	return input1 + input2 === input3;
// }
console.log(sumIsEqual(1, 2, 3, true));
console.log(sumIsEqual(2, 2, 4), true);
console.log(sumIsEqual(10, 2, 12), true);
console.log(sumIsEqual(10, false, 12), false);
console.log(sumIsEqual("10", "2", "12"), true);
console.log(sumIsEqual("fred", "bob", "hello"), false);