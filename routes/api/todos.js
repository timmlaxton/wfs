const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Todos route'));

module.exports = router;