$(document).ready(toggle(),addPost());

function toggle() {
	var hide = true;
	var $footer = $('#footer'); 
	var position = $footer.offset();
    $('.glyphicon-align-justify').on('click', function (event) {
		if (hide) {
			$('#menu').addClass("menu-slide-show");
			$(this).css("color", "deeppink");
			$(this).css("font-size", "3em");
			$('#menu').css("height",position.top - 130);
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
		var $footer = $('.footer'); 
		var position = $footer.position();
		
		alert(position.top);

	});
}




