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
			let newRow = document.createElement('div')
			newRow.classList.add("col");
			newRow.innerHTML = `
			<h1 class="justify-content-start">${items[i].title}</h1>
			<h2 class="justify-content-start">${items[i].date}</div>
			<p class="fs-6 justify-content-start">${items[i].content}</p>
			<p class="justify-content-start">${items[i].categories}</p>
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