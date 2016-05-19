function Graphite(name, wattage) {
    Material.call(this, name, wattage);
}

Graphite.prototype = Object.create(Material.prototype);