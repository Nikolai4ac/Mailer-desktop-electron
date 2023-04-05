const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const insertRouter = require('.//routes/Index');
const path = require('path');
const { mySqlRouter } = require('./routes/MySql');
const showTableRouter = require('./routes/receivers');
const {preparationRouter} = require('./routes/prepare');
const mailSendRouter = require('./routes/modalinfo');
const bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({limit: '20mb', extended: true}))
app.use('/', insertRouter);
app.use('/', mySqlRouter);
app.use('/', showTableRouter);
app.use('/', preparationRouter);
app.use('/', mailSendRouter);
app.use(bodyParser.json({limit: '20mb'}));
app.get('/', (req,res) => {
    res.redirect('/receiver-list');
})
app.use("/public/", express.static(path.resolve(__dirname, './public')))
app.listen(port, (error) => { 
    if (error) { 
        throw error;
    }
    else {
        console.log(`Server is listening on port: ${port}`);
    }
})