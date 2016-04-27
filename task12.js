var now = new Date();
//1.Write a JavaScript program to display the current day and time in the following format.
switch (now.getDay()) {
    case 0:
        alert("Today is: Sunday");
        break;
    case 1:
        alert("Today is: Monday");
        break;
    case 2:
        alert("Today is: Tuesday");
        break;
    case 3:
        alert("Today is: Wednesday");
        break;
    case 4:
        alert("Today is: Thursday");
        break;
    case 5:
        alert("Today is: Friday");
        break;
    case 6:
        alert("Today is: Saturday");
        break;
}
//2.Write a JavaScript program to get the current date.
console.log("current date: " + now.toString());
//3.Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
for (var i = 2014; i < 2050; i++) {
    var day = new Date(i, 0, 1);
    if (day.getDay() == 1) {
        console.log(day);
    }
}
//4.Write a JavaScript program to calculate days left until next New Year.
var newYear = new Date(now.getFullYear() + 1, 0, 1);
var diff = newYear - now;
console.log("before the new year " + Math.round(diff / 86400000) + " days");

//5.Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
var a = [1, 2, 4, 0];

function is_array(mix) {
    return (mix instanceof Array);
}
console.log(is_array(a));

//6.Write a JavaScript function to clone an array
function cloneArray(arr) {
    var cloneArr = [];
    for (var i = 0; i < arr.length; i++) {
        cloneArr[i] = arr[i];
    }
    return cloneArr;
}
console.log(cloneArray(a));

//7.Write a JavaScript function to find the most frequent item of an array
function frequentElem(arr) {
    var itemCount = 0;
    var maxi = 0;

    for (var i = 0; i < arr.length; i++) {
        itemCount = 0;
        for (var j = 0; j < arr.length; j++) {
            if (i != j) {
                if (arr[i] == arr[j]) {
                    itemCount++;
                }
            }
        }
        if (itemCount > maxi) {
            maxi = i;
        }
    }
    return arr[maxi];
}
console.log(frequentElem(a));

//8.Write a JavaScript function that inverts the case of the letters of the given string and returns new string

function newUpperString(str) {
    var result = str.toUpperCase();
    return result;
}
console.log(newUpperString("Welcom"));
//9.Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
var stringArray = ["String", "stRingxx", "strIng", "sTring"];
for (var i = 0; i < stringArray.length; i++) {
    for (var j = 0; j < stringArray.length; j++) {
        if (i != j && stringArray[j] != undefined && stringArray[i] != undefined) {
            if (stringArray[i].toUpperCase() == stringArray[j].toUpperCase()) {
                stringArray.splice(j, 1);
            }
        }
    }
}
console.log(stringArray);
//10.Write a JavaScript program to shuffle an array
var n = 0;
while (2 * n <= a.length) {
    var c = a[2 * n];
    n++;
    if (a[2 * n] != undefined) {
        a[2 * (n - 1)] = a[2 * n];
        a[2 * n] = c;
    }
}
console.log(a);

//11.Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
function removeElem(mass) {
    var rezMas = [];
    var k = 0;
    for (var i = 0; i < mass.length - 1; i++) {
        if (mass[i] != null) {
            if (mass[i] != 0) {
                if (mass[i] != false) {
                    if (mass[i] != "") {
                        if (mass[i] != undefined) {
                            if (!(isNaN(mass[i])) || typeof mass[i] == "string") {
                                rezMas[k] = mass[i];
                                k++;
                            }
                        }
                    }
                }
            }
        }
    }
    return rezMas;
}
var newMas = [1, 0, 3, "", false, undefined, NaN, "Welcom"];
console.log(removeElem(newMas));
//12.Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
function compare(a, b) {
    var result = 0;
    if (a.title > b.title) {
        result = 1;
    } else if (a.title < b.title) {
        result = -1;
    }
    return result;
}

var people = [{
    author: 'Roger Allers ',
    title: 'The Lion King',
    libraryID: 1994
}, {
    author: 'Byron Howard ',
    title: 'Zootopia',
    libraryID: 2016
}, {
    author: 'Gary Trousdale ',
    title: 'Beauty and the Beast',
    libraryID: 1991
}];

people.sort(compare);

for (var i = 0; i < people.length; i++) {
    console.log(people[i]);
}
//13.Write a JavaScript function to merge two arrays and removes all duplicates elements
var mas1 = [1, 2, 3, 4];
var mas2 = [2, 4, "aaooaa", "Welcom"];

function mergeArray(elem1, elem2) {
    for (var i = 0; i < elem2.length; i++) {
        elem1.push(elem2[i]);
    }
    for (var i = 0; i < elem1.length; i++) {
        for (var j = 0; j < elem1.length; j++) {
            if (i != j) {
                if (elem1[i] == elem1[j]) {
                    elem1.splice(j, 1);
                }
            }
        }
    }
    return elem1;
}
console.log(mergeArray(mas1, mas2));
//14.Write a JavaScript function to remove a specific element from an array
function removeElement(element, arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == element) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(removeElement(15, [14, 3, 5, 15, 6, 15, 5]));
//15.Write a JavaScript function to get a random item from an array
function randomEl(arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
}
console.log(randomEl([14, 3, 5, 15, 6, 15, 5]));
//16.Write a JavaScript function to move an array element from one position to another
function swap(arr, element, another) {
    if (arr instanceof Array) {
        var c = arr[another - 1];
        arr[another - 1] = arr[element - 1];
        arr[element - 1] = c;
    } else {
        console.log("Not array");
    }
    return arr;
}
console.log(swap([14, 3, 5, 15, 6, 15, 5], 3, 5));
//17.Write a JavaScript function to get difference between two dates in days
function differenceDates(data1, data2) {
    return Math.floor((data1 - data2) / 86400000);
}
var now = new Date();
var data = new Date(2016, 11, 11);
console.log(differenceDates(data, now));
//18.Write a JavaScript function to get the maximum date from an array of dates
function maxDate(arr) {
    var maxi = 0;
    var maxDate = new Date(arr[maxi]);
    for (var i = 1; i < arr.length - 1; i++) {
        var date = new Date(arr[i]);
        if (date > maxDate) {
            maxDate = arr[i];
            maxi = i;
        }
    }
    return arr[maxi];
}
console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));
//19.Write a JavaScript function to split a string and convert it into an array of words
function convertIntoArrayWords(str) {
    var arr1 = str.split(" ");
    return arr1;
}
console.log(convertIntoArrayWords("Welcom Welcom Welcom"));
//20.Write a JavaScript function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeFirstLetter("Welcom"));
//21.Write a JavaScript function to convert a string into camel case


//22.Write a JavaScript function to find the highest value in an array
function maxValueInArray(arr2) {
    var max = arr2[0];
    for (var i = 0; i < arr2.length - 1; i++) {
        if (arr2[i] > max) {
            max = arr2[i];
        }
    }
    return max;
}
console.log(maxValueInArray([14, 3, 5, 15, 6, 16, 5]));
//23.Write a JavaScript function to find the lowest value in an array
function minValueInArray(arr3) {
    var min = arr3[0];
    for (var i = 0; i < arr3.length - 1; i++) {
        if (arr3[i] < min) {
            min = arr3[i];
        }
    }
    return min;
}
console.log(minValueInArray([14, 3, 5, 15, 6, 16, 5]));
//24.Write a JavaScript function to check to check whether a variable is numeric or not
function isNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}
console.log(isNumeric(12));
console.log(isNumeric('abcd'));
console.log(isNumeric('12'));
console.log(isNumeric(' '));
console.log(isNumeric(1.20));
console.log(isNumeric(-200));
//25.Write a JavaScript function to calculate the sum of values in an array
function sumElements(arr4){
  var sum = 0;
  for (var i = 0; i < arr4.length - 1; i++) {
      sum += arr4[i];
  }
  return sum;
}
console.log(sumElements([14, 3, 5, 15, 6, 16, 5]));
//26.Write a JavaScript program to get the length of a JavaScript object
var myArray = new Object();
myArray["firstname"] = "Gareth";
myArray["lastname"] = "Simpson";
myArray["age"] = 21;
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
var size = Object.size(myArray);
console.log(size);
//Task27. List the properties of a JavaScript object
var objectLength = function(){
console.log("firstname lastname");
var someObject = {genre : "age",
author : "Gary Trousdale",
name : "Gary",
year : 2016
}
var otherObject = Object.keys(someObject);
var propList = [];
for(i = 0; i<otherObject.length; i++){
propList[i] = someObject[otherObject[i]];
}
console.log("The list of object keys properties is: "+propList);
}();