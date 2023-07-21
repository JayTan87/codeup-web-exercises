(()=>{ // IIFE (Immediately Invoked Function Expression)

	const url ="https://swapi.dev/api/people/1/";
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	}
	fetch(url,options);


})();