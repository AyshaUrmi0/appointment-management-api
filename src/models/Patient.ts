import mongoose, { Schema, Document } from 'mongoose';

export interface Patient extends Document {
  name: string;
  contactInfo?: string;
}

const PatientSchema = new Schema<Patient>({
  name: { type: String, required: true },
  contactInfo: { type: String, required: false }
}, { timestamps: true });

export const PatientModel = mongoose.model<Patient>('Patient', PatientSchema);