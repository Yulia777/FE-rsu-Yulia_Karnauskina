function Material(name, wattage) {
    this.name = name;
    this.wattage = wattage;
}

Material.prototype.getName = function () {
    return this.name;
};

Material.prototype.getWattage = function () {
    return this.wattage;
};

Material.prototype.checkIfHas = function (what) {
    if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        console.info('"' + what + '" is in the status of "' + this.getName() + '"');
    }
};