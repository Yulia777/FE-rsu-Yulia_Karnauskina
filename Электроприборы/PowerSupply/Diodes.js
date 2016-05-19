function Diodes(name) {
    var tungsten = new Tungsten('a', 10);
    var lithium = new Lithium('b', 10);
    Complex.call(this, name, [tungsten, lithium]);
}

Diodes.prototype = Object.create(Complex.prototype); 