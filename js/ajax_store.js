(function() {
	"use strict";
	// TODO: Create an AJAX GET request for the file under data/inventory.json
	$.ajax('../data/inventory.json').done(() => {
		console.log("Inside function")
	})
	// TODO: Take the data from inventory.json and append it to the products table
	//       HINT: Your data should come back as a JSON object; use console.log() to inspect
	//             its contents and fields
	//       HINT: You will want to target #insertProducts for your new HTML elements
})();