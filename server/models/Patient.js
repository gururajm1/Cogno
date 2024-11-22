// models/Patient.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientSchema = new Schema({
  uuid: { type: String, required: true, unique: true },
  patientName: { type: String, required: true },
  guardianName: { type: String, required: true },
  mentalDisability: { type: String, required: true },
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor' },
  phoneNumber: { type: String, required: true },
  eegData: { type: String, required: true },
  prescriptionImage: { type: String, required: true },
  age: { type: Number, required: true },
  lastVisit: { type: Date, required: true },
  nextVisit: { type: Date, required: true },
  gamesProgress: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
});

module.exports = mongoose.model('Patient', patientSchema);
