import { Request, Response } from 'express';
import { AppointmentModel } from '../models/Appointment';
import { PatientModel } from '../models/Patient';

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { PatientId, AppointmentDate, AppointmentTime, Reason } = req.body;
    
    if (!PatientId || !AppointmentDate || !AppointmentTime || !Reason) {
      return res.status(400).json({ message: 'PatientId, AppointmentDate, AppointmentTime, and Reason are required' });
    }

    // Check if patient exists
    const patient = await PatientModel.findById(PatientId);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const appointment = new AppointmentModel({
      patientId: PatientId,
      appointmentDate: AppointmentDate,
      appointmentTime: AppointmentTime,
      reason: Reason
    });

    await appointment.save();

    res.status(201).json({
      AppointmentId: appointment._id,
      PatientId: appointment.patientId,
      AppointmentDate: appointment.appointmentDate,
      AppointmentTime: appointment.appointmentTime,
      Reason: appointment.reason,
      Message: 'Appointment created successfully'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await AppointmentModel.find({}).populate('patientId', 'name');
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};