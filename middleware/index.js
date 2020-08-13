const express = require('express');
const auth = require("./auth");
const verifikasi = require('./verifikasi');
const router = express.Router();

// daftar menu register
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

// Alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(2), auth.halamanrahasia)


module.exports = router;