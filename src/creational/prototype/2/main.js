const car = require('./prototype');

const myCar = Object.create(car, { owner: { value: 'John' } });

console.log(myCar.__proto__ === car); //true