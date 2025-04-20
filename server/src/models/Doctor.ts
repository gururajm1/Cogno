// src/models/Doctor.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IPatient } from './Patient';

export interface IDoctor extends Document {
  doctorName: string;
  hospitalName: string;
  doctorSpeciality: string;
  email?: string;
  phoneNumber?: string;
  patients: mongoose.Types.ObjectId[] | IPatient[];
  createdAt: Date;
  updatedAt: Date;
}

const doctorSchema = new Schema({
  doctorName: { type: String, required: true },
  hospitalName: { type: String, required: true },
  doctorSpeciality: { type: String, required: true },
  email: { type: String },
  phoneNumber: { type: String },
  patients: [{ type: Schema.Types.ObjectId, ref: 'Patient' }]
}, { timestamps: true });

export default mongoose.model<IDoctor>('Doctor', doctorSchema);