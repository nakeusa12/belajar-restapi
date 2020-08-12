var mysql = require("mysql");

// Buat koneksi ke database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar_restapi'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('MySql Terkoneksi');
})

module.exports = conn;