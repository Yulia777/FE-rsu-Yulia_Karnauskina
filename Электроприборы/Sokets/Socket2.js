function Socket2(name) {
    var capacitor = new Capacitor('a');
    var tungstens = new Tungsten('b', 10);
    var diodes = new Diodes('c');
    var iron = new Iron('d', 0);
    var aluminum = iron.heat();

    Complex.call(this, name, [
        capacitor,
        tungstens,
        aluminum,
        diodes
    ]);
}

Socket2.prototype = Object.create(Complex.prototype);  