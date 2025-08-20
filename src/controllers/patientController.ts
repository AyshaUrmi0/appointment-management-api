import { Request, Response } from 'express';
import { PatientModel } from '../models/Patient';

export const createPatient = async (req: Request, res: Response) => {
  try {
    const { name, contactInfo } = req.body;
    
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const patient = new PatientModel({ name, contactInfo });
    await patient.save();
    
    res.status(201).json({ 
      id: patient._id,
      name: patient.name, 
      contactInfo: patient.contactInfo, 
      message: 'Patient created successfully' 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPatients = async (req: Request, res: Response) => {
  try {
    const patients = await PatientModel.find({});
    res.json(patients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};