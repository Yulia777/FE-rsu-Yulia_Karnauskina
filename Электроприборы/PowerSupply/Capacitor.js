function Capacitor(name) {
    var lead = new Lead('a', 10);
    var silver = new Silver('b', 10);
    var iron = new Iron('c', 0);
    Complex.call(this, name, [lead, silver, iron]);
}

Capacitor.prototype = Object.create(Complex.prototype); 