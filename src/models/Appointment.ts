import mongoose, { Schema, Document } from 'mongoose';

export interface Appointment extends Document {
  patientId: string;
  appointmentDate: string;
  appointmentTime: string;
  reason: string;
}

const AppointmentSchema = new Schema<Appointment>({
  patientId: { type: String, required: true },
  appointmentDate: { type: String, required: true },
  appointmentTime: { type: String, required: true },
  reason: { type: String, required: true }
}, { timestamps: true });

export const AppointmentModel = mongoose.model<Appointment>('Appointment', AppointmentSchema);