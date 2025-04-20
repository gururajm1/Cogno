// src/models/Patient.ts
import mongoose, { Schema, Document } from 'mongoose';

// Define interfaces for EEG data and activity visualization
export interface IEEGData {
  timestamp: Date;
  data: number[];
  notes?: string;
}

export interface IActivityVisualization {
  timestamp: Date;
  activityType: string;
  metrics: Record<string, number>;
  notes?: string;
}

export interface IPrescription {
  uploadDate: Date;
  fileUrl: string;
  doctorNotes?: string;
  medicationDetails?: string;
}

// File attachment interface
interface IFileAttachment {
  filename: string;
  contentType: string;
  url: string;
  uploadedAt: Date;
}

// Patient interface
export interface IPatient extends Document {
  uuid: string;
  patientName: string;
  medicalHistory?: string[];
  allergies?: string[];
  currentMedications?: string[];
  fileAttachments?: IFileAttachment[];
  guardianName: string;
  mentalDisability: string;
  doctorId: mongoose.Types.ObjectId;
  phoneNumber: string;
  dateOfBirth: Date;
  age: number;
  lastVisit: Date;
  nextVisit: Date;
  eegData: IEEGData[];
  activityVisualizations: IActivityVisualization[];
  prescriptions: IPrescription[];
  gamesProgress: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const patientSchema = new Schema({
  uuid: { type: String, required: true, unique: true },
  patientName: { type: String, required: true },
  medicalHistory: [{ type: String }],
  allergies: [{ type: String }],
  currentMedications: [{ type: String }],
  fileAttachments: [{
    filename: { type: String, required: true },
    contentType: { type: String, required: true },
    url: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now }
  }],
  guardianName: { type: String, required: true },
  mentalDisability: { type: String, required: true },
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor' },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  age: { type: Number, required: true },
  lastVisit: { type: Date, required: true },
  nextVisit: { type: Date, required: true },
  eegData: [{
    timestamp: { type: Date, default: Date.now },
    data: [Number],
    notes: String
  }],
  activityVisualizations: [{
    timestamp: { type: Date, default: Date.now },
    activityType: String,
    metrics: { type: Map, of: Number },
    notes: String
  }],
  prescriptions: [{
    uploadDate: { type: Date, default: Date.now },
    fileUrl: { type: String, required: true },
    doctorNotes: String,
    medicationDetails: String
  }],
  gamesProgress: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
}, { timestamps: true });

export default mongoose.model<IPatient>('Patient', patientSchema);