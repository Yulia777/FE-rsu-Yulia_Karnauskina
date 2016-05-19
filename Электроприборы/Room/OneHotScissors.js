function OneHotScissors() {
    OneCurling.call(this);

    var socket1 = new Socket1('HotScissors in Socket');
    var off = new Off('Off');
    var socket2 = new Socket2('Socket');

    this.name = 'OneHotScissors in Room';
    this.materials = this.materials.concat([socket1, off, socket2]);
}

OneHotScissors.prototype = Object.create(OneCurling.prototype);