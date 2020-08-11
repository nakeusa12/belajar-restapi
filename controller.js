'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index =  function(req, res){
    response.ok("Aplikasi REST API Berjelan", res)
}

// Menampilkan semua data mahasiswa
exports.tampildata = function(req, res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
        if(error){
            console.log(error)
        }else{
            response.ok(rows, res)
        }
    });
};

// Menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanId = function(req, res){
    let id = req.params.id;
    connection.query( 'SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function(error, rows, fileds){
            if(error){
                console.log(error)
            }else{
                response.ok(rows, res)
            }
        }   
    );
};

// Menambahkan data mahasiswa
exports.tambahdata = function(req, res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)',
    [nim, nama, jurusan], function(error, rows, fileds){
            if(error){
                console.log(error)
            }else{
                response.ok("Berhasil Menambahkan Data", res)
            }
        }
    );
};

// Mengubah data berdasarkan Id
exports.ubahdataMahasiswa = function(req, res){
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id], 
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil ubah data", res)
            }
        }
    );
};