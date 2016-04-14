function factorial(n) {  //Write a function that calculates factorial
  return (n != 1) ? n * factorial(n - 1) : 1;
}
alert( factorial(3) );