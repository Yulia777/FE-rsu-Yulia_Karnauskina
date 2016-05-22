function task15() {
	var clickTimes = 0;
	var body = document.getElementsByTagName('body');

	var container = document.createElement('div');
	var block = document.createElement('div');
	var menu_wrap = document.createElement('div');
	var ul = document.createElement('ul');
	var menu1 = document.createElement('li');
	var menu2 = document.createElement('li');
	var menu3 = document.createElement('li');
	var menu4 = document.createElement('li');
	var menu5 = document.createElement('li');
	var menu_top = document.createElement('div');

	var menu_2 = [menu1, menu2, menu3, menu4, menu5];

	container.className = 'container';
	block.className = 'block';
	menu_wrap.className = 'menu_wrap';
	menu1.className = 'menu_2 menu1';
	menu2.className = 'menu_2 menu2';
	menu3.className = 'menu_2 menu3';
	menu4.className = 'menu_2 menu4';
	menu5.className = 'menu_2 menu5';
	menu_top.className = 'menu_top';

	container.innerHTML = '';
	block.innerHTML = '';
	menu_wrap.innerHTML = '';
	ul.innerHTML = '';
	menu1.innerHTML = 'Menu 1';
	menu2.innerHTML = 'Menu 2';
	menu3.innerHTML = 'Menu 3';
	menu4.innerHTML = 'Menu 4';
	menu5.innerHTML = 'Menu 5';
	menu_top.innerHTML = 'Top menu';

	body[0].appendChild(container);
	container.appendChild(block);
	container.appendChild(menu_wrap);
	menu_wrap.appendChild(ul);
	ul.appendChild(menu1);
	ul.appendChild(menu2);
	ul.appendChild(menu3);
	ul.appendChild(menu4);
	ul.appendChild(menu5);
	menu_wrap.appendChild(menu_top);

	container.style.cssText = 'width: 180px; margin: 10px 10px 0 0; color: white; position: relative; z-index: 1; top: 1px;';
	block.style.cssText = 'width: 100%; height: 10px; background-color: #ccc; border-top: 1px solid #bbb; border-bottom: 2px solid #bbb;';
	menu_wrap.style.cssText = 'width: 160px; margin: 0 auto; background-color: #4abec1; position: absolute; top: 12px; left: 10px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; z-index: -1;';
	menu_top.style.cssText = 'width: 160px; height: 30px; background-color: #4abec1; line-height: 25px; text-align: center; font-size: 1.5em; border: 2px solid #2d989a; border-top: 2px solid #bbb; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; transition: box-shadow 230ms linear; box-sizing: border-box;';
	ul.style.cssText = 'list-style: none; margin: 0 auto; padding: 0; display: none;';

	for(var i = 0; i < menu_2.length; i++) {
		menu_2[i].style.cssText = 'cursor: pointer; font-size: 1.4em; padding: 4px 0 0 45px;';
	}

	menu_top.onmouseover = function() {
		menu_top.style.cursor = 'pointer';
		menu_top.style.boxShadow = '0px 3px 4px 3px rgba(131,145,227,0.3)';
	};

	menu_top.onmouseout = function() {
		menu_top.style.cursor = 'none';
		menu_top.style.boxShadow = 'none';
	};

	function itemHover() {
		for(var i = 0; i < menu_2.length; i++) {
			menu_2[i].onmouseover = function() {
				this.style.backgroundColor = 'rgba(21,143,0,0.1)';
			};
			menu_2[i].onmouseout = function() {
				this.style.backgroundColor = '#4abec1';
			};
		}
	}

	menu_top.onclick = function() {
		clickTimes += 1;
		if(clickTimes % 2 !== 0) {
			ul.style.display = 'block';
			itemHover();
		} else {ul.style.display = 'none';}
	};

}

window.onload = function() {
	task15();
};