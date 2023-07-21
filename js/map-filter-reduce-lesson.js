(() => {
	//Vanilla JS
	const url = "../data/houses.json";
	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}
	fetch(url, options)
		.then(response => {
			return response.json();
		})
		.then(houses => {
			//working with houses array
			let housesTwoBedsPlus = houses.filter((house) => {
				const nmrOfBaths = parseFloat(house.baths)
				return parseFloat(house.beds) >= 2 && nmrOfBaths;
			});
	console.log("Filtered houses =>",housesTwoBedsPlus);

	let housesPriceRange = houses.map(house => {
		const priceRange = 200_000;
		const canBuy = parseFloat(house.price) > priceRange ? 'Nah' : 'Yeah'
		const newValue = `
		Address: ${house.address}
		Can I afford it: ${canBuy}
		
		`;
		return newValue;
	});
	for(let house of housesPriceRange) {
		console.log(house);
	}
	//Reduce Method
			//find the most expensive house
			const largestPrice = houses.reduce(/*function parameter*/(accumulator /*accumulator*/, house /*currentValue*/, index)=>{
				let price = parseFloat(house.price);
				if (price>accumulator) {
					accumulator = price;
				}
				return accumulator;
			}, 0 /* initial value for accumulator*/);
	console.log(largestPrice);
			const lowestPrice = houses.reduce(/*function parameter*/(accumulator /*accumulator*/, house /*currentValue*/, index)=>{
				let price = parseFloat(house.price);
				if (price < accumulator) {
					accumulator = price;
				}
				return accumulator;
			}, parseFloat(houses[0].price) /* initial value for accumulator*/);
			console.log(lowestPrice);
			const allPrice = houses.reduce(/*function parameter*/(accumulator /*accumulator*/, house /*currentValue*/, index)=>{
				let price = parseFloat(house.price);
				accumulator += price;
				return accumulator;
			}, 0 /* initial value for accumulator*/);
			console.log("total market cost => ",allPrice.toLocaleString('en-US',{style: 'currency', currency: 'USD'}));

			const dashboardObject = houses.reduce((accumulator, house /*currentValue*/, index) => {
				accumulator.totalHouses++
				let price = parseFloat(house.price);
				if (price > accumulator.mostExpensive) {
					accumulator.mostExpensive = price;
				}
				if (price < accumulator.cheapestHouse) {
					accumulator.cheapestHouse = price;
				}
				accumulator.totalMarketValue += price;
				return accumulator;
			}, {
				totalHouses: 0,
				mostExpensive: 0,
				cheapestHouse: parseFloat(houses[0].price),
				totalMarketValue: 0

			});
			console.log(dashboardObject);
		});


})();