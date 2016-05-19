function HeatingElement(name) {
    var curling = new Curling('a', 0);
    var iron = new Iron('b', 0);
    Complex.call(this, name, [curling, iron]);
}

HeatingElement.prototype = Object.create(Complex.prototype);  