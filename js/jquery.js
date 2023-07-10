// window.onload = function () {
// 	alert("The window has loaded");
// }
$(()=>{

	// $('li').css('font-size', '20px');
	// $('h1, p, li').css('background-color', 'yellow');
	// let message = $('h1').html();
	// alert(message);
	function changeColor() {
		$(this).css('background-color', 'red');
	}
	function upSize() {
		$(this).css('font-size','18px')
	}
	function liRed() {
		$('li').css('color','red')
	}

	$('h1').on('click',changeColor)
	$('p').on('dblclick', upSize)
	// $('li').on('hover', liRed, default)

});
