// controllers/doctorController.js
const Doctor = require('../models/Doctor');

exports.addDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully!', doctor });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getDoctorPatients = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('patients');
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor.patients);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
