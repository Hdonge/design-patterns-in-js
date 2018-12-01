var Database = require('./singleton_database');

const mongo = new Database('mongo');
console.log(mongo.getData()); //mongo

const mysql = new Database('mysql');
console.log(mongo.getData()); //mongo
