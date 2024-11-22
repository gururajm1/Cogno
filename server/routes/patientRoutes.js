// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/add', patientController.addPatient);
router.get('/:id', patientController.getPatientById);

module.exports = router;
