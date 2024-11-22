// models/Doctor.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorSchema = new Schema({
  doctorName: { type: String, required: true },
  hospitalName: { type: String, required: true },
  doctorSpeciality: { type: String, required: true },
  patients: [{ type: Schema.Types.ObjectId, ref: 'Patient' }]
});

module.exports = mongoose.model('Doctor', doctorSchema);
