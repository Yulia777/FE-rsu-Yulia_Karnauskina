function Room(name, ingredients) {
    Complex.call(this, name, ingredients);
}

Room.prototype = Object.create(Complex.prototype);

