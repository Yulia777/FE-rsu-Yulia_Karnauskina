$(document).ready(function() {
	'use strict';
	
  $('body').append('<div class="outer_block"> </div>');
  $('.outer_block').append('<div class="inner_block"> </div>');
  $('.inner_block').append('<div class="inner_block_header"> </div>');
  $('.inner_block_header').append('<div class="after"></div>');
  $('.inner_block_header').append('<h1>Header</h1>');
  $('.inner_block').append('<div class="inner_block_mainContent"></div>');
  $('.inner_block_mainContent').append('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem enim, condimentum in luctus ac, auctor a purus. Curabitur vitae convallis elit. Curabitur ornare nibh ligula, sit amet porta nisl pretium non. Nam vitae enim porta risus faucibus posuere vel non enim. Sed nec lorem ante. Mauris scelerisque nulla quis risus cursus, sed cursus eros cursus.</p>');

  $('body').css({
  	'padding': '0',
		'margin': '0',
		'font-family': 'Arial'
  });

  $('.outer_block').css({
  	'max-width': '417px',
		'height': '206px',
		'margin': '7px',
		'box-sizing': 'border-box',
		'border': '2px solid #8bd8bf',
		'border-radius': '5px 5px 5px 5px',
		'background-color': '#abffe3'
  });

  $('.inner_block').css({
  	'max-width': '396px',
		'height': '183px',
		'margin': '7px',
		'background': '#fff',
		'border': '2px solid #8bd8bf',
		'position': 'relative',
		'overflow': 'hidden'
  });

  $('.inner_block_header').css({
  	'width': '100%',
		'height': '30px',
		'position': 'absolute',
		'background-color': '#e3c71c'
  });

  $('.after').css({
  	'content': '""',
		'position': 'absolute',
		'top': '30px',
		'left': '10px',
		'border': '15px solid transparent',
		'border-top-width': '13px',
		'border-bottom-width': '8px',
		'border-top-color': '#e3c71c',
		'width': '0',
		'height': '0'
  });

  $('h1').css({
  	'margin': '3px 10px',
		'font-size': '1.5em',
		'font-weight': '400'
  });

  $('.inner_block_mainContent').css({
  	'position': 'absolute',
		'top': '40px',
		'left': '0',
		'overflow': 'hidden'
  });

  $('p').css({
  	'margin': '4px 12px',
		'font-size': '1.0em',
		'color': '#8bd8bf',
		'font-family': 'Times New Roman'
  });
});