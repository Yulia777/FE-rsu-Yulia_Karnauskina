function Tungsten(name, wattage) {
    Material.call(this, name, wattage);
}

Tungsten.prototype = Object.create(Material.prototype);