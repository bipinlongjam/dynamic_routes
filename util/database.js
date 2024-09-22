

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Bipin@0810', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;


// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'Bipin@0810'
// })

// module.exports = pool.promise();