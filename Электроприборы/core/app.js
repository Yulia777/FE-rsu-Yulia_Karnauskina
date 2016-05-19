function Application() {

}

Application.prototype.start = function () {
    var oneHairdryer = new OneHairdryer();
    oneHairdryer.showWattage();
    oneHairdryer.search('hairdryer');

    var oneCurling = new OneCurling();
    oneCurling.showWattage();
    oneCurling.search('curling');

    var oneHotScissors = new OneHotScissors();
    oneHotScissors.showWattage();
    oneHotScissors.search('hotScissors');
};