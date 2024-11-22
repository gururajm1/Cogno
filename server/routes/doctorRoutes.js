// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.post('/add', doctorController.addDoctor);
router.get('/:id/patients', doctorController.getDoctorPatients);

module.exports = router;
