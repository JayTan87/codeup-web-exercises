$(() => {
	$('.hidey-btn').click(function () {
		$('dd').toggleClass('invisible');
	});
	$('dt').click(function () {
		$(this).css('background-color', 'yellow');
	})
	//
	// $('.remove').click(function () {
	// 	$('.highlight').css('background-color', 'unset')
	// })
	//remove button jquery
	$('.remove').click(function () {
		$('dt').toggleClass('highlight');
	})
	//add button for li highlight jquery
	$('body').append(`<button class="new-btn">Highlight li text</button>`);
	$('.new-btn').on('click', function () {
		$('ul li:last-child').css('background-color', 'yellow');
	});
	//h3 click functionality jquery
	$('h3').on('click', function (e) {
		if (e.target.localName === 'h3') {
			$(this).next().children().css('font-weight', 'bold');
		}
	})
	//li click functionality jquery
	$('li').on('click', function (e) {
		if (e.target.localName === 'li') {
			$(this).parent().children().first().addClass('blue');
		}
	})
	$('body').append(`
<div class="d-flex justify-space-between">
	<div id="box1" class="square red"></div>
	<div id="box2" class="square orange"></div>		
	<div id="box3" class="square yellow"></div>
</div>
`);

	$('body').append(`
<div class="d-flex justify-space-between">	
	<button class="btn1">Move Left Box</button>
	<button class="btn2">Move Center Box</button>
	<button class="btn3">Move Right Box</button>
</div>
	
`);
	$('.btn1').on('click', function () {
		$('#box1').addClass('orange');
		$('#box1').removeClass('red');
		$('#box2').addClass('red');
		$('#box2').removeClass('orange');

	});
	$('.btn2').on('click', function () {
		let random = (Math.round((Math.random() * 2)))
		if(random % 2 === 0) {
			console.log(random);
		$('#box2').addClass('red');
		$('#box2').removeClass('orange');
		$('#box2').removeClass('yellow');
		}
		else {
			console.log(random);
			$('#box2').addClass('yellow');
			$('#box2').removeClass('orange');
			$('#box2').removeClass('red');
		}
	});
	$('.btn3').on('click', function () {
		$('#box1').addClass('yellow');
		$('#box1').removeClass('red');
		$('#box3').addClass('orange');
		$('#box3').removeClass('yellow');
	});

});
//
// let hideyBtn = document.querySelector('.hidey-btn');
// let remove = document.querySelector('.remove');
// let ddElements = document.querySelectorAll('.invisible');
// let dtElements = document.querySelectorAll('dt');
// let hiddenClass = document.querySelector('.hidden');
//
// hideyBtn.addEventListener('click', () => {
// 	ddElements.forEach(ddElement => {
// 		ddElement.style.cssText = `
// 		visibility: hidden
// 		`;
// 	})
// })
// remove.addEventListener('click', () => {
// 	dtElements.forEach(dtElement => {
// 		dtElement.style.cssText = `
// 		background-color: unset
// 		`;
// 	})
// })
// function highlight() {
// 	this.style.cssText = `
// 	background-color: yellow`
// 	};
//
// function addEventListenerByClass(className, event, fn) {
// 	let list = document.getElementsByClassName(className);
// 	for (let i = 0, len = list.length; i < len; i++) {
// 		list[i].addEventListener(event, fn);
// 	}
// }
//
// addEventListenerByClass('highlight', 'dblclick', highlight);