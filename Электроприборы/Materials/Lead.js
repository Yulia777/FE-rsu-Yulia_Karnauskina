function Lead(name, wattage) {
    Material.call(this, name, wattage);
}

Lead.prototype = Object.create(Material.prototype);