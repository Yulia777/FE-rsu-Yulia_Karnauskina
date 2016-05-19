function OneHairdryer() {
    var off = new Off('Hairdryer Off');
    Room.call(this, 'OneHairdryer in Room', [off]);
}

OneHairdryer.prototype = Object.create(Room.prototype);