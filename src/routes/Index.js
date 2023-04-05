const express = require('express');
const insertRouter = express.Router();
const bodyParser = require('body-parser');
insertRouter.use(bodyParser.json({limit: '20mb'}));
insertRouter.use(bodyParser.urlencoded({limit: '20mb', extended:false}))
const { insertInTable } = require('../routes/MySql');
insertRouter.post('/create-list', (req,res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    insertInTable([fname, lname, email])   
    res.redirect('/receiver-list');
})

module.exports = insertRouter;