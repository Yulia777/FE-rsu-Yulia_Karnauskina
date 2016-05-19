function Iron(name, wattage) {
    Material.call(this, name, wattage);
}

Iron.prototype = Object.create(Material.prototype);

Iron.prototype.heat = function () {
    return new Aluminum(this.name, this.wattage);
};