const express = require("express");
const mysql = require("mysql");
const mySqlRouter = express.Router();
const colors = require('colors');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "N1ikola1i14321BG!",
  database: "maildb",
});
con.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Connected to Database!");
  }
});
async function insertInTable(data) {
  // const sql = `INSERT INTO customers (first_name, last_name, email) VALUES (?, ?, ?);`;
  const procedureSql = 'CALL insertData(?, ?, ?)'
  con.query(procedureSql, [data[0], data[1], data[2]], function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      console.log(`RECORD INSERTED`.green);
    }
  });
}
async function deleteFromTable(data) {
  // const sql = "DELETE FROM customers WHERE first_name = ? AND last_name = ? AND email = ?";
  const procedureSql = 'CALL deleteData(?,?,?)';
  con.query(procedureSql, [data[0], data[1], data[2]], function(err, result, fields) {
    if (err) {
      throw err
    } else {
      console.log(`RECORD DELETED!`.red);
    }
  })
}

module.exports = { mySqlRouter, insertInTable, deleteFromTable};
