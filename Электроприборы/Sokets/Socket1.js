function Socket1(name) {
    var copper = new Copper('a', 10);
    var carbon = new Carbon('b', 10);
    var lithium = new Lithium('c', 10);
    var iron = new Iron('d', 0);

    Complex.call(this, name, [
        copper,
        carbon,
        lithium,
        iron
    ]);
}

Socket1.prototype = Object.create(Complex.prototype);