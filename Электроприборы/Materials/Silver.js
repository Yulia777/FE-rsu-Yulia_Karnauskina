function Silver(name, wattage) {
    Material.call(this, name, wattage);
}

Silver.prototype = Object.create(Material.prototype);