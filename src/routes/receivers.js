const express = require('express');
const showTableRouter = express.Router();
const db = require('../dbconnection')

showTableRouter.get('/receiver-list', async function(req, res, next) {
    let sql = 'SELECT * FROM customers';
    db.query(sql, async function(err, data, fields) {
        if (err) { 
            throw err;
        }
        res.render('index', {userData: data})
    })
})
module.exports = showTableRouter;