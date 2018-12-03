const car = require('./prototype');

const myCar = Object.create(car, { owner: { value: 'John' } });

console.log(mycar.__proto__ === car); //true