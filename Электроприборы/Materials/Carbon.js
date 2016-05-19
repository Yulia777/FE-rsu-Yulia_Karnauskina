function Carbon(name, wattage) {
    Material.call(this, name, wattage);
}

Carbon.prototype = Object.create(Material.prototype);