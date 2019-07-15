const { readFileSync } = require('fs');
const mysql = require('mysql');

const conn = readFileSync('./config/mysql.json', "utf8");

module.exports = mysql.createConnection(JSON.parse(conn));