const express = require('express');
const multer = require('multer');
const tradeController = require('../controllers/tradeController');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('csvfile'), tradeController.uploadCSV);

module.exports = router;
