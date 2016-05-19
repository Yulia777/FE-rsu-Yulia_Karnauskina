function Off(name) {
    var plastic = new Plastic('a', 0);
    var aluminum = new Aluminum('b', 0);
    var iron = new Iron('c', 0);

    Complex.call(this, name, [
        plastic,
        aluminum,
        iron
    ]);
}

Off.prototype = Object.create(Complex.prototype);