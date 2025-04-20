// src/controllers/doctorController.ts
import { Request, Response } from 'express';
import Doctor, { IDoctor } from '../models/Doctor';
import Patient from '../models/Patient';
import mongoose from 'mongoose';

// Add a new doctor
export const addDoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully!', doctor });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get doctor by ID
export const getDoctorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
      return;
    }
    
    res.status(200).json(doctor);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get all patients for a doctor
export const getDoctorPatients = async (req: Request, res: Response): Promise<void> => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('patients');
    
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
      return;
    }
    
    res.status(200).json(doctor.patients);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Update doctor details
export const updateDoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const doctor = await Doctor.findByIdAndUpdate(id, updates, { new: true });
    
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
      return;
    }
    
    res.status(200).json({ message: 'Doctor updated successfully', doctor });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Add a patient to a doctor
export const addPatientToDoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { doctorId, patientId } = req.params;
    
    // Check if doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
      return;
    }
    
    // Check if patient exists
    const patient = await Patient.findById(patientId);
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    // Check if patient is already assigned to this doctor
    if (doctor.patients.includes(new mongoose.Types.ObjectId(patientId))) {
      res.status(400).json({ message: 'Patient already assigned to this doctor' });
      return;
    }
    
    // Add patient to doctor's patients array
    doctor.patients.push(new mongoose.Types.ObjectId(patientId));
    await doctor.save();
    
    // Update patient's doctorId
    patient.doctorId = new mongoose.Types.ObjectId(doctorId);
    await patient.save();
    
    res.status(200).json({ message: 'Patient assigned to doctor successfully', doctor });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Remove a patient from a doctor
export const removePatientFromDoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { doctorId, patientId } = req.params;
    
    // Check if doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
      return;
    }
    
    // Check if patient exists
    const patient = await Patient.findById(patientId);
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    // Check if patient is assigned to this doctor
    const patientIndex = doctor.patients.findIndex(
      p => p.toString() === patientId
    );
    
    if (patientIndex === -1) {
      res.status(400).json({ message: 'Patient not assigned to this doctor' });
      return;
    }
    
    // Remove patient from doctor's patients array
    doctor.patients.splice(patientIndex, 1);
    await doctor.save();
    
    // Remove doctorId from patient
    patient.doctorId = undefined;
    await patient.save();
    
    res.status(200).json({ message: 'Patient removed from doctor successfully', doctor });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};