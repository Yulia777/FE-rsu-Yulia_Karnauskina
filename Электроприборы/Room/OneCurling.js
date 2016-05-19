function OneCurling() {
    OneHairdryer.call(this);

    var socket1 = new Socket1('Hairdryer in Socket1');
    var socket2 = new Socket2('Curling in Socket');
    var off = new Off('off');

    this.name = 'OneCurling in Room';
    this.materials = this.materials.concat([socket1, socket2, off]);
}

OneCurling.prototype = Object.create(OneHairdryer.prototype);