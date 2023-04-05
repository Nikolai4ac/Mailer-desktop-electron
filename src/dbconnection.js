const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'N1ikola1i14321BG!',
    database: 'maildb'
})

con.connect(async function(err) {
    if (err) {
        throw err
    } else {
        console.log(`Connected for querying successfully!`);
    }
})

module.exports = con;