function Coil(name) {
    var carbon = new Carbon('a', 10);
    var copper = new Copper('b', 10);
    var silver = new Silver('c', 10);
    Complex.call(this, name, [carbon, copper, silver]);
}

Coil.prototype = Object.create(Complex.prototype); 