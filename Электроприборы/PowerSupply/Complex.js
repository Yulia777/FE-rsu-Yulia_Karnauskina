function Complex(name, materials) {
    this.materials = materials;
    Material.call(this, name, this.getWattage());
}

Complex.prototype = Object.create(Material.prototype);

Complex.prototype.getWattage = function () {
    var totalWattage = 0;

    for (var i = 0; i < this.materials.length; i++) {
        totalWattage += this.materials[i].getWattage();
    }

    return totalWattage;
};

Complex.prototype.showWattage = function () {
    console.info('Wattage of ' + this.getName() + ' is ' + this.getWattage() + ' Vt ');
};

Complex.prototype.search = function (what) {
    this.checkIfHas(what);

    this.materials.forEach(function (material) {
        material.checkIfHas(what);
    })
};