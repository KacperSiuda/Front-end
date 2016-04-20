$(document).ready(toggle(),addPost());

function toggle() {
	var hide = true;
    $('.glyphicon-align-justify').on('click', function (event) {
		if (hide) {
			$('#menu').addClass("menu-slide-show");
			$(this).css("color", "deeppink");
			$(this).css("font-size", "3em");
			hide = false;
		} else {
			$('#menu').removeClass("menu-slide-show");
			$(this).css("color", "black");
			$(this).css("font-size", "2em");
			hide = true;
		}
	});
}
function addPost() {
	
	$('.glyphicon-plus-sign').on('click', function (event) {
		alert("test");

	});
}




