function Calculator1(leftOperand) {//1 - answer:24 25 11 6
    'use strict';
    console.log('Calculator v1');
    this.myltiply = function (num) {
        return leftOperand * num;
    };
    this.add = function (num) {
        return leftOperand + num;
    };
    this.subtract = function (num) {
        return leftOperand - num;
    };
    this.divide = function (num) {
        return leftOperand / num;
    };
}

var calc1 = new Calculator1(12);

console.log(calc1.myltiply(2));
console.log(calc1.add(3));
console.log(calc1.subtract(1));
console.log(calc1.divide(2));
(function () {//2 - answer: 27
    'use strict';

    function Calculator(leftOperand) {
        this.result = leftOperand;
        this.add = function (rigthOperand) {
            this.result = this.result + rigthOperand;
            return this;
        };
        this.multiply = function (rigthOperand) {
            this.result = this.result * rigthOperand;
            return this;
        };
        this.subtract = function (rigthOperand) {
            this.result = this.result - rigthOperand;
            return this;
        };
        this.divide = function (rigthOperand) {
            this.result = this.result / rigthOperand;
            return this;
        };
        this.toString = function () {
            return this.result;
        };

    };
    var calc = new Calculator(12);
    alert(calc.multiply(2).add(3));
})();
(function () {//Calculator v37
    'use strict';
    function Calculator(leftOperand) {
        var _result;

        Object.defineProperty(this, 'result', {
                set: function (value) {
                    if ((value && !isNaN(value)) || (value === 0)) {
                        _result = value;
                    } else {
                        throw new TypeError("Incorrect type");
                    };
                },
                get: function () {
                    return _result;
                }
            }
        );

        this.result = leftOperand || 0;
    };

    Calculator.prototype.reset = function reset() {
        this.result = 0;
    };

    Calculator.prototype.divide = function (rigthOperand) {
        for (var i = 0; i < arguments.length; i++) {
            this.result /= arguments[i];
        };
        return this.result;
    };

    Calculator.prototype.subtract = function (rigthOperand) {
        for (var i = 0; i < arguments.length; i++) {
            this.result -= arguments[i];
        };
        return this.result;
    };

    Calculator.prototype.multiply = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.result *= arguments[i];
        };
        return this.result;
    };

    Calculator.prototype.add = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.result += arguments[i];
        };
        return this.result;
    };

    window.app = window.app || {};
    window.app.Calculator = Calculator;
})();

var calc = new window.app.Calculator();
console.log(calc.multiply(2, 2, 4, 5));
console.log(calc.add(3, 1, 2));
console.log(calc.subtract(1, 4, 2, 1));
console.log(calc.divide(2, 6));
calc.reset();