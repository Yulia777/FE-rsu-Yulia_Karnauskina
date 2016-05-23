function	addItem() {
	'use strict';

	var listItems = document.getElementById('listItems');
	var submit = document.getElementById('toDoSubmit');
	var confirm = document.getElementById('confirm');
	var todoItem = document.getElementById('todoItem');
	var toDoName = document.getElementById('toDoName');
	var btnYes = document.getElementById('btnYes');
	var btnNo = document.getElementById('btnNo');

	function itemsCount(list) {
		var count = 0;
		for(var i = 0; i < list.getElementsByTagName('li').length; i++) {
			count += 1
		}
		return count;
	}

	function clickEvent() {
		confirm.style.visibility = 'visible';
		todoItem.innerHTML = toDoName.value;
	}

	function confWindowClose() {
		confirm.style.visibility = 'hidden';
		toDoName.value = '';
	}

	function confirmYes () {
		var count = itemsCount(listItems) + 1;
		var li = document.createElement('li');
		var checkbox = document.createElement('input');
		var label = document.createElement('label');
		checkbox.type = 'checkbox';
		checkbox.id = 'checkBox' + count;
		checkbox.value = count;
		checkbox.setAttribute('checked', 'checked');
		label.htmlFor = 'checkBox' + count;
		label.appendChild(document.createTextNode(' ' + toDoName.value));
		li.appendChild(checkbox);
		li.appendChild(label);
		listItems.appendChild(li);
		confWindowClose();
	}

	submit.addEventListener('click', clickEvent);
	btnYes.addEventListener('click', confirmYes);
	btnNo.addEventListener('click', confWindowClose);
}

window.onload = function() {
	'use strict';
	addItem();
};