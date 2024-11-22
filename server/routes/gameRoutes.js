// routes/gameRoutes.js
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/add', gameController.addGame);
router.get('/:patientId', gameController.getGameByPatient);

module.exports = router;
