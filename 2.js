var arr = [1,2,3,4,5,6,7,8,9,10]; //Создать два и более объектов, имеющих одинаковые методы.

const People = function(years) {
  this.years = years;
};

People.prototype.foo = function() {
  return this.years + arr[5];
};
const obj1 = new People('Ann is years: ' );
const obj2 = new People('John is years: ');

console.log(obj1.foo()); 
console.log(obj2.foo());




