var arr = [1,2,3,4,5,6,7,8,9,10]; // Вывести сумму всех нечётных элементов массива.
var result = 0;

for (var i = 0; i <= arr.length; i++){
	if (i % 2 === 0){
		result += i; 
	}
}

console.log(result);