function Aluminum(name, wattage) {
    Material.call(this, name, wattage);
}

Aluminum.prototype = Object.create(Material.prototype);