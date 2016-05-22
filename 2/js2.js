$(document).ready(function() {
	var count = 0;

	$('body').append('<div class="container"></div>');
	$('.container').append('<div class="block"></div>');
	$('.container').append('<div class="menu_wrap"></div>');
	$('.menu_wrap').append('<ul></ul>');
	$('ul').append('<li class="menu_2 menu1">Menu 1</li>');
	$('ul').append('<li class="menu_2 menu2">Menu 2</li>');
	$('ul').append('<li class="menu_2 menu3">Menu 3</li>');
	$('ul').append('<li class="menu_2 menu4">Menu 4</li>');
	$('ul').append('<li class="menu_2 menu5">Menu 5</li>');
	$('.menu_wrap').append('<div class="menu_top">Top menu</div>');

	$('body').css({
		'margin': '0'
	});

	$('.container').css({
		'width': '180px',
		'margin': '10px 10px 0 0',
		'color': 'white',
		'position': 'relative',
		'z-index': '1',
		'top': '1px'
	});

	$('.block').css({
		'width': '100%',
		'height': '10px',
		'background-color': '#ccc',
		'border-top': '2px solid #bbb',
		'border-bottom': '2px solid #bbb'
	});

	$('.menu_wrap').css({
		'width': '160px',
		'margin': '0 auto',
		'background-color': '#4abec1',
		'position': 'absolute',
		'top': '12px',
		'left': '10px',
		'border-bottom-left-radius': '20px',
		'border-bottom-right-radius': '20px',
		'z-index': '-1'
	});

	$('.menu_top').css({
		'width': '160px',
		'height': '30px',
		'background-color': '#4abec1',
		'line-height': '25px',
		'text-align': 'center',
		'font-size': '1.5em',
		'border': '2px solid #2d989a',
		'border-top': '2px solid #bbb',
		'border-bottom-left-radius': '20px',
		'border-bottom-right-radius': '20px',
		'transition': 'box-shadow 1.2s linear',
		'box-sizing': 'border-box'
	});

	$('ul').css({
		'list-style': 'none',
		'margin': '0',
		'padding': '0',
		'display': 'none'
	});

	$('.menu_2').css({
		'font-size': '1.4em',
		'padding': '4px 0 0 45px'
	});

	$('.menu_wrap').mouseover(
		function() {
			$(this).css({'cursor': 'pointer'});
		});

	$('.menu_2').hover(
		function() {
			$(this).css({'background-color': 'rgba(21,143,0,0.1)'});
		},
		function() {
			$(this).css({'background-color': '#4abec1'});
		});

	$('.menu_top').click(function() {
		count += 1;
		if(count % 2 !== 0){
			$('ul').css({'display': 'block'});
		} else {$('ul').css({'display': 'none'});}
	});

});

