function bmwFactory(type) {
    if (type === 'x5') {
        return new Bmw(type, 10800, 300);
    } else if (type === 'x6') {
        return new Bmw(type, 11800, 350);
    }
}

function Bmw(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
}

module.exports = bmwFactory;
