const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movies_contrll'
})

module.exports = Connection;