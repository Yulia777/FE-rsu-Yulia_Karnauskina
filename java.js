"use strict";
var x = (function () {
    var a = "One";// Declare two variables and show them
    alert(a);
    var b = "two";
    alert(b);
}());
function areaOfTriangle(obj) {  //Write a function that can find triangle's area
    var a = 1 * obj.st1.value;
    var b = 1 * obj.st2.value;
    var c = 1 * obj.st3.value;
    var p = (a + b + c) / 2;
    var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    obj.res.value = s;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Write a function that reverse the given array using three kind of loops
var i = 1;

console.log("for");
for (i = arr.length - 1; i >= 0; i = i - 1) {
  console.log(arr[i]);
}

console.log("while");
i = arr.length - 1;
while (i >= 0) {
  console.log(arr[i]);
    i = i - 1;
}

console.log("do while");
i = arr.length - 1;
do {
  console.log(arr[i]);
    i = i - 1;
} while (i >= 0);

console.log("Check arguments"); //Write a function that checks if the given arguments is positive number or negative number or is 0
var argsList = [-2, -1, 0, 1, 2];
var checkArgs = function (args) {
    var value;
    var i = 1;
for (i = 0; i < args.length; i++) {
        value = args[i];
        if (value > 0) {
console.log(value + "-This is a positive meaning");
        } else if (value === 0) {
console.log(value + "-This is zero");
        } else if (value < 0) {
console.log(value + "-This is negative meaning");
        }
    }
};
console.log(checkArgs(argsList));
