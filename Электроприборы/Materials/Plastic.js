function Plastic(name, wattage) {
    Material.call(this, name, wattage);
}

Plastic.prototype = Object.create(Material.prototype);