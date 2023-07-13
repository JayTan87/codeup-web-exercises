$(() => {
	"use strict";
	let posts = document.querySelector('#posts')
	// TODO: Create an AJAX GET request for the file under data/inventory.json
	$.ajax('../data/blog.json').done((data) => {
		renderList(data)
	})

	function renderList(items) {
		for (let i = 0; i < items.length; i++) {
			console.log("inside for loop")
			let newRow = document.createElement('tr')
			newRow.classList.add("d-flex", "justify-content-between");
			newRow.innerHTML = `
			<div class="col text-center">${items[i].title}</div>
			<div class="col text-center">${items[i].content}</div>
			<div class="col text-center">${items[i].price}</div>
			<div class="col text-center">${items[i].categories.join(', ')}</>
			`;
			posts.appendChild(newRow);
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