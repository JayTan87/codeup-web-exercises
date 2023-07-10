// (function (){

// $(() => {
// 	$('#id-container').css('background-color','red');
//
//
// $('.title').css('color', 'purple');
//
// let titleElements = document.querySelectorAll('.title');
// titleElements.forEach(titleElements => {
// 	titleElements.style.color = "blue";
// });
//
// $('li').css('color','magenta');
//
// $('h1, p, .hightlight').css('font-weight', 'bold');
// })();
$(() => {

	function underlineThis() {

		$(this).css('text-decoration', 'underline');
		$('p').css('color', 'red');
		$('ul').css('display','none');
	}

	function noUnderLineThis() {

		$(this).css('text-decoration', 'none');
	}
	function changeToPointer () {
		$(this).css('cursor','pointer');
	}
	function changeFromPointer () {
		$(this).css('cursor', 'default');
	}
	$('h2')
		.on('click', underlineThis)
		.on('dblclick', noUnderLineThis)
		.on('mouseenter', changeToPointer)
		.on('mouseleave', changeFromPointer)

});
