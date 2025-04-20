// src/controllers/patientController.ts
import { Request, Response } from 'express';
import Patient, { IPatient, IPrescription, IEEGData, IActivityVisualization } from '../models/Patient';
import mongoose from 'mongoose';

// Medical field management handlers
const handleArrayFieldUpdate = async (req: Request, res: Response, field: keyof IPatient) => {
  try {
    const { id } = req.params;
    const { value } = req.body;

    const update = { [field]: value };
    const options = { new: true, runValidators: true };

    const patient = await Patient.findByIdAndUpdate(id, 
      { $push: update },
      options
    );

    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }

    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Add a new patient
export const addPatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: 'Patient added successfully!', patient });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get patient by ID with populated references
export const getPatientById = async (req: Request, res: Response): Promise<void> => {
  try {
    const patient = await Patient.findById(req.params.id)
      .populate('doctorId')
      .populate('gamesProgress');
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Update patient details
export const updatePatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const patient = await Patient.findByIdAndUpdate(id, updates, { new: true });
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    res.status(200).json({ message: 'Patient updated successfully', patient });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Delete a patient
export const deletePatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const patient = await Patient.findByIdAndDelete(id);
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    res.status(200).json({ message: 'Patient removed successfully' });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Add EEG data to a patient
export const addEEGData = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const eegData: IEEGData = req.body;
    
    const patient = await Patient.findById(id);
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    patient.eegData.push(eegData);
    await patient.save();
    
    res.status(200).json({ message: 'EEG data added successfully', eegData: patient.eegData });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Add activity visualization data to a patient
export const addActivityVisualization = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const activityData: IActivityVisualization = req.body;
    
    const patient = await Patient.findById(id);
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    patient.activityVisualizations.push(activityData);
    await patient.save();
    
    res.status(200).json({ 
      message: 'Activity visualization data added successfully', 
      activityVisualizations: patient.activityVisualizations 
    });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Medical history endpoints
export const addMedicalHistory = async (req: Request, res: Response) => 
  handleArrayFieldUpdate(req, res, 'medicalHistory');

export const removeMedicalHistory = async (req: Request, res: Response) => {
  try {
    const { id, index } = req.params;
    const patient = await Patient.findByIdAndUpdate(id, {
      $pull: { medicalHistory: { $eq: index } }
    }, { new: true });

    res.status(200).json(patient?.medicalHistory);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Allergy management endpoints
export const addAllergy = async (req: Request, res: Response) => 
  handleArrayFieldUpdate(req, res, 'allergies');

export const removeAllergy = async (req: Request, res: Response) => {
  try {
    const { id, index } = req.params;
    const patient = await Patient.findByIdAndUpdate(id, {
      $pull: { allergies: { $eq: index } }
    }, { new: true });

    res.status(200).json(patient?.allergies);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Medication management endpoints
export const addMedication = async (req: Request, res: Response) => 
  handleArrayFieldUpdate(req, res, 'currentMedications');

export const removeMedication = async (req: Request, res: Response) => {
  try {
    const { id, index } = req.params;
    const patient = await Patient.findByIdAndUpdate(id, {
      $pull: { currentMedications: { $eq: index } }
    }, { new: true });

    res.status(200).json(patient?.currentMedications);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Add prescription to a patient
export const addPrescription = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const prescription: IPrescription = req.body;
    
    const patient = await Patient.findById(id);
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    patient.prescriptions.push(prescription);
    await patient.save();
    
    res.status(200).json({ 
      message: 'Prescription added successfully', 
      prescriptions: patient.prescriptions 
    });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Delete a prescription
export const deletePrescription = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, prescriptionId } = req.params;
    
    const patient = await Patient.findById(id);
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    // Find the index of the prescription to remove
    const prescriptionIndex = patient.prescriptions.findIndex(
      p => p._id && p._id.toString() === prescriptionId
    );
    
    if (prescriptionIndex === -1) {
      res.status(404).json({ message: 'Prescription not found' });
      return;
    }
    
    // Remove the prescription
    patient.prescriptions.splice(prescriptionIndex, 1);
    await patient.save();
    
    res.status(200).json({ 
      message: 'Prescription deleted successfully', 
      prescriptions: patient.prescriptions 
    });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get all EEG data for a patient
export const getPatientEEGData = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id).select('eegData');
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    res.status(200).json(patient.eegData);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get all activity visualizations for a patient
export const getPatientActivityVisualizations = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id).select('activityVisualizations');
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    res.status(200).json(patient.activityVisualizations);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get all prescriptions for a patient
export const getPatientPrescriptions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id).select('prescriptions');
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    res.status(200).json(patient.prescriptions);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Update patient checkup dates
export const updateCheckupDates = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { lastVisit, nextVisit } = req.body;
    
    const patient = await Patient.findById(id);
    
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
      return;
    }
    
    if (lastVisit) patient.lastVisit = new Date(lastVisit);
    if (nextVisit) patient.nextVisit = new Date(nextVisit);
    
    await patient.save();
    
    res.status(200).json({ 
      message: 'Checkup dates updated successfully', 
      lastVisit: patient.lastVisit,
      nextVisit: patient.nextVisit
    });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};