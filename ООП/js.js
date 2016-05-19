(function () {
    'use strict';

    function Shape(inpType) {
        var _type;

        Object.defineProperty(this, 'type', {
                set: function (value) {
                    if (value && isNaN(value)) {
                        _type = value;
                    } else {
                        throw new TypeError('Incorrect Shape');
                    }
                },
                get: function () {
                    return _type;
                }
            }
        );

        this.type = inpType || '';
    }


    Shape.prototype.getType = function () {
        return this.type;
    };

    Shape.prototype.getPerimeter = function () {
        var perimeter = 0;

        for (var i = 0; i < arguments.length; i++) {
            perimeter += arguments[i];
        }

        return perimeter;
    };

    Shape.prototype.draw = function () {
        console.log(this.type + " name is drawn");
    };

    function Triangle(a, b, c) {
        if ((a+b>c)||(b+c>a)||(a+c>b)) {
            this.a = a;
            this.b = b;
            this.c = c;
        } else {
            console.log("Incorrect side of the triangle,the default values are used");
            this.a = 2;
            this.b = 3;
            this.c = 4;
        }

        Shape.apply(this, ["Triangle"]);
    }

    Triangle.prototype = Object.create(Shape.prototype);
    Triangle.prototype.constructor = Triangle;

    Triangle.prototype.getPerimeter = function () {
        return Shape.prototype.getPerimeter.apply(this, [this.a, this.b, this.c]);
    };

    function Rectangle(a, b) {
        if ((a>0)&&(b>0)) {
            this.a = a;
            this.b = b;
            this.c = a;
            this.d = b;
        } else {
            console.log("Incorrect side of the rectangle,the default values are used");
            this.a = 1;
            this.b = 2;
            this.c = 1;
            this.d = 2;
        }

        Shape.apply(this, ["Rectangle"]);
    }

    Rectangle.prototype = Object.create(Shape.prototype);

    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.getPerimeter = function () {
        return Shape.prototype.getPerimeter.apply(this, [this.a, this.b, this.c, this.d]);
    };

    function Cube(a,h){
        this.h = h;
        Rectangle.apply(this, [a,a]);
    }

    Cube.prototype = Object.create(Rectangle.prototype);

    Cube.prototype.constructor = Cube;

    Rectangle.prototype.getVolume = function () {
        return this.a*this.a*this.h;
    };


    var triangle = new Triangle(2,3,4);
    triangle.draw();
    console.log(triangle.getPerimeter());

    var rectangle = new Rectangle(2,3);
    rectangle.draw();
    console.log(rectangle.getPerimeter());

    var cube = new Cube(2,3);
    cube.draw();
    console.log(cube.getPerimeter());
    console.log(cube.getVolume());


}());