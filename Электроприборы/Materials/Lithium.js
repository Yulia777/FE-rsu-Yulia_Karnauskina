function Lithium(name, wattage) {
    Material.call(this, name, wattage);
}

Lithium.prototype = Object.create(Material.prototype);