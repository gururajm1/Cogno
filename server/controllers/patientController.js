// controllers/patientController.js
const Patient = require('../models/Patient');

exports.addPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: 'Patient added successfully!', patient });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate('doctorId').populate('gamesProgress');
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
