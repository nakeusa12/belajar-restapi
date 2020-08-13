const express = require('express');
const auth = require("./auth");
const router = express.Router();

// daftar menu register
router.post('/api/v1/register', auth.registrasi);

module.exports = router;