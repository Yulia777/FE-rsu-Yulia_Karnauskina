function Copper(name, wattage) {
    Material.call(this, name, wattage);
}

Copper.prototype = Object.create(Material.prototype);