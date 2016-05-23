var result = 0;

var external = function (val){
	'use strict';
  var value = val;
  var library = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];
  
  function isArray() {//1.Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
	}
  
  function deepCloneArrHelper() {//2.Write a JavaScript function todeep clone an array using recursion
    return deepCloneArr(value);
  }
  
  function deepCloneArr(arr) {
    var clonedArr = [];
    if (Array.isArray(arr)) {
        clonedArr = arr.slice(0);
        for (var i = 0; i < arr.length; i++) {
            clonedArr[i] = deepCloneArr(clonedArr[i]);
        }
        return clonedArr;
    } else {
        return arr;
    }
	}
  
  function mostFrequent() {//3.Write a JavaScript function to find the most frequent item of an array.
    var itemObj = {};
    var repeatItem;
    var maxRepeated = 0;
    for (var i = 0; i < value.length; i++) {
        itemObj[value[i]] = (itemObj[value[i]] || 0) + 1;
			if (itemObj[value[i]] > maxRepeated) {
	    	maxRepeated = itemObj[value[i]];
	    	repeatItem = value[i];
			}
    }
    return repeatItem;
	}
  
  function remDuplicateHelper() {//4.Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
    return remDuplicate(value);
  }
  
  function remDuplicate(arr) {
    var newArray = [];
    function compare(arr, uniqArr) {
        var repeat;
        for (var i = 0; i < arr.length; i++) {
            repeat = 0;
            for (var j = 0; j < uniqArr.length; j++) {
                if (arr[i].toLowerCase() === uniqArr[j].toLowerCase()) {
                    repeat = 1;
                    break;
                }
            }
            if (repeat === 0) {
                uniqArr.push(arr[i]);
            }
        }
        return uniqArr;
    }
    return compare(arr, newArray);
	}
  
  function shuffleArr() {//5.Write a JavaScript program to shuffle an array
    for (var i = value.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = value[i];
        value[i] = value[j];
        value[j] = temp;
    }
    return value;
	}
  
  function sortArrOfObjHelper() {//6.Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
    return sortArrOfObj(library);
	}
  
  function sortArrOfObj(obj) {
    obj.sort(titleSort);
    function titleSort (a, b) {
        var titleA = a.title.toLowerCase();
        var titleB = b.title.toLowerCase();
        if (titleA > titleB) {
            return 1;
        }
        if (titleA < titleB) {
            return -1;
        }
        return 0;
    }
    var result = '';
    for (var i = 0; i < obj.length; i++) {
      result += ' Author: ' + obj[i].author + ', Title: ' + obj[i].title + ', LibraryID: ' + obj[i].libraryID + ' ***** ';
    }
    return result;
	}
  
  function mergeArrHelper(arr) {//7.Write a JavaScript function to merge two arrays and removes all duplicates elements
    var array = arr;
    return mergeArr(array, value);
  }
  
  function mergeArr(arr1, arr2) {
    var arr3 = arr1.concat(arr2.filter(function (item) {
        return arr1.indexOf(item) < 0;
    }));
    return arr3;
  }
  
  function removeSpecificHelper(element) {//8.Write a JavaScript function to remove a specific element from an array
    var elem = element;
    return removeSpecific(value, elem);
  }
  
  function removeSpecific(arr, element) {
	  var index = arr.indexOf(element);
		if (index > 0) {
		  arr.splice(index, 1);
	  }
		return arr;
  }
  
  function randElemHelper() {//9.Write a JavaScript function to get a random item from an array
    return randElem(value);
  }
  
  function randElem(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
  
  function moveElemHelper(one, two) {//10.Write a JavaScript function to move an array element from one position to another
    var indexOne = one;
    var indexTwo = two;
    return moveElem (value, indexOne, indexTwo);
  }
  
  function moveElem(arr, fromIndex, toIndex) {
	  var element = arr[fromIndex];
		arr.splice(fromIndex, 1);
		arr.splice(toIndex, 0, element);
		return arr;
	}
  
  function strToArrHelper() {//11.Write a JavaScript function to split a string and convert it into an array of words
    return strToArr(value);
  }
  
  function strToArr(str) {
    return str.trim().split(' ');
	}
  
  function capsFirstHelper() {//12.Write a JavaScript function to capitalize the first letter of a string
    return capsFirst(value);
  }
  
  function capsFirst(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	}

  function camelizeHelper() {//13.Write a JavaScript function to convert a string into camel case
    return camelize(value);
  }
  
  function camelize(str) {
    return str[0].toUpperCase() + str.replace(/\W+(.)/g, function (m, ch) {
        return ch.toUpperCase();
    }).slice(1);
	}  

  function sumArrElHelper(funct) {//14.Write a JavaScript function that accepts two arguments: array and function. The function iterate the entire array and calls the given function with the current array element.
    var func = funct;
    return sumArrEl(value, func);
  }
  
  function sumArrEl(arr, func) {
	  for (var i = 0; i < arr.length; i++) {
		  func(arr[i]);
		}
  }
  
  function getLengthObjHelper () {//15.Write a JavaScript program to get the length of an JavaScript object
    return getLengthObj (library);
  }
  
  function getLengthObj (obj) {
	  var length = 0;
		for(var key in obj) {
		  if (obj.hasOwnProperty(key)) {
			  length += 1;
			}
		}
		return length;
  }
  
  return  {
    isArray: isArray,
    deepCloneArrHelper: deepCloneArrHelper,
    mostFrequent: mostFrequent,
    remDuplicateHelper: remDuplicateHelper,
    shuffleArr: shuffleArr,
    sortArrOfObjHelper: sortArrOfObjHelper,
    mergeArrHelper: mergeArrHelper,
    removeSpecificHelper: removeSpecificHelper,
    randElemHelper: randElemHelper,
    moveElemHelper: moveElemHelper,
    strToArrHelper: strToArrHelper,
    capsFirstHelper: capsFirstHelper,
    camelizeHelper: camelizeHelper,
    sumArrElHelper: sumArrElHelper,
    getLengthObjHelper: getLengthObjHelper
  }
  
};

var task1_0 = external('qwe');
var task1_1 = external([1, 2, 4, 0]);
var task2 = external([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]);
var task3 = external([1, 1, 2, 2, 2, 7]);
var task4 = external(['a', 'b', 'b', 'c', 'd', 'i', 'i', 'f']);
var task5 = external(['a', 'b', 'c', 'd', 'i', 'f']);
var task6 = external();
var task7 = task3;
var task8 = task3;
var task9 = task4;
var task10 = external([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var task11 = external(' Now are you? ');
var task12 = external('how are you?');
var task13_a = external('Java Script');
var task13_b = external('java-script');
var task13_c = external('Java Script Exercises');
var task14 = external([2,4,1,2,4]);
var task15 = external();

console.log(task1_0.isArray());
console.log(task1_1.isArray());
console.log(task2.deepCloneArrHelper());
console.log(task3.mostFrequent());
console.log(task4.remDuplicateHelper());
console.log(task5.shuffleArr());
console.log(task6.sortArrOfObjHelper());
console.log(task7.mergeArrHelper([1, 2]));
console.log(task8.removeSpecificHelper(1));
console.log(task9.randElemHelper());
console.log(task10.moveElemHelper(2, 9));
console.log(task11.strToArrHelper());
console.log(task12.capsFirstHelper());
console.log(task13_a.camelizeHelper());
console.log(task13_b.camelizeHelper());
console.log(task13_c.camelizeHelper());
console.log(task14.sumArrElHelper(function(el){result += el;}), result);
console.log(task15.getLengthObjHelper());