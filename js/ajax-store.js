$(() => {
	"use strict";
	let tbody = document.querySelector('#insertProducts')
	// TODO: Create an AJAX GET request for the file under data/inventory.json
	$.ajax('../data/inventory.json').done((data) => {
		renderList(data)
	})

	function renderList(items) {
		for (let i = 0; i < items.length; i++) {
			console.log("inside for loop")
			let newRow = document.createElement('tr')
			newRow.classList.add("d-flex", "justify-content-between");
			newRow.innerHTML = `
			<td class="col text-center">${items[i].title}</td>
			<td class="col text-center">${items[i].quantity}</td>
			<td class="col text-center">${items[i].price}</td>
			<td class="col text-center">${items[i].categories.join(', ')}</td>
			`;
			tbody.appendChild(newRow);
		}
	}
});

function addTool() {
	let userRow = document.createElement('tr')
	userRow.innerHTML = `
			<td class="text">${items[i].title}</td>
			<td class="text">${items[i].quantity}</td>
			<td class="text">${items[i].price}</td>
			<td class="text">${items[i].categories.join(', ')}</td>
			`;
}
// function addCategory(category) {
// 	for(let j = 0; j < items.category.length; j++) {
// 		td.innerHTML = `${items.category[i]}`
// 	}
// }
			// $(`#insertProducts`).append(`
			// <td>${items[i].title}</td> <td>${items[i].quantity}</td> <td>${items[i].price}</td><td></td>



	// TODO: Take the data from inventory.json and append it to the products table
	//       HINT: Your data should come back as a JSON object; use console.log() to inspect
	//             its contents and fields
	//       HINT: You will want to target #insertProducts for your new HTML elements
