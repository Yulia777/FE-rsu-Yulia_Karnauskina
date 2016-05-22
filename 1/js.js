function task15() {
	'use strict';
	var  = document.createElement('div');
	var body = document.getElementsByTagName('body');
	var inner_block = document.createElement('div');
	var inner_block_header = document.createElement('div');
	var header = document.createElement('h1');
	var inner_block_mainContent = document.createElement('div');
	var paragraph = document.createElement('p');
	var inner_block_header_pseudo = document.createElement('div');

	outer_block.className = 'outer_block';
	inner_block.className = 'inner_block';
	inner_block_header.className = 'inner_block_header';
	inner_block_mainContent.className = 'inner_block_mainContent';
	inner_block_header_pseudo.className = 'inner_block_header_pseudo';

	outer_block.innerHTML;
	inner_block.innerHTML;
	inner_block_header.innerHTML;
	header.innerHTML = 'Header';
	inner_block_mainContent.innerHTML;
	paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem enim, condimentum in luctus ac, auctor a purus. Curabitur vitae convallis elit. Curabitur ornare nibh ligula, sit amet porta nisl pretium non. Nam vitae enim porta risus faucibus posuere vel non enim. Sed nec lorem ante. Mauris scelerisque nulla quis risus cursus, sed cursus eros cursus.';
	inner_block_header_pseudo.innerHTML;

	body[0].appendChild(outer_block);
	outer_block.appendChild(inner_block);
	inner_block.appendChild(inner_block_header);
	inner_block_header.appendChild(header);
	inner_block.appendChild(inner_block_mainContent);
	inner_block_mainContent.appendChild(paragraph);
	inner_block_header.appendChild(inner_block_header_pseudo);

	body[0].style.cssText = 'padding: 0;	margin: 0; font-family: Arial;';
	outer_block.style.cssText = 'max-width: 417px; height: 206px; margin: 7px;	box-sizing: border-box;	border: 2px solid #8bd8bf; border-radius: 5px 5px 5px 5px; background-color: #abffe3;';
	inner_block.style.cssText = 'max-width: 396px; height: 183px; margin: 7px; background: #fff; border: 2px solid #8bd8bf;	position: relative;	overflow: hidden;';
	inner_block_header.style.cssText = 'width: 100%; height: 30px; position: absolute; background-color: #e3c71c;';
	header.style.cssText = 'margin: 3px 15px;	font-size: 1.4em; font-weight: 400;';
	inner_block_mainContent.style.cssText = 'position: absolute; top: 40px;	left: 0; overflow: hidden;';
	paragraph.style.cssText = 'margin: 4px 12px;	font-size: 1.0em;	color: #8bd8bf; font-family: Times New Roman;';
	inner_block_header_pseudo.style.cssText = 'content: "";	position: absolute;	top: 30px;	left: 10px;	border: 15px solid transparent;	border-top-width: 13px;	border-bottom-width: 8px;	border-top-color: #e3c71c;	width: 0;	height: 0;';
}

window.onload = function() {
	task15();
};