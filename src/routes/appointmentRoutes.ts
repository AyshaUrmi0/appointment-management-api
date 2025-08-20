import express from 'express';
import { createAppointment, getAppointments } from '../controllers/appointmentController';

const router = express.Router();

/**
 * @swagger
 * /api/appointments:
 *   post:
 *     summary: Create a new appointment
 *     tags: [Appointments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - PatientId
 *               - AppointmentDate
 *               - AppointmentTime
 *               - Reason
 *             properties:
 *               PatientId:
 *                 type: string
 *                 description: MongoDB ObjectId of the patient
 *                 example: "60f7b2a7d2a5e2a4f0e9c123"
 *               AppointmentDate:
 *                 type: string
 *                 format: date
 *                 example: "2025-01-31"
 *               AppointmentTime:
 *                 type: string
 *                 example: "14:30"
 *               Reason:
 *                 type: string
 *                 example: "Routine check-up"
 *     responses:
 *       201:
 *         description: Appointment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 AppointmentId:
 *                   type: string
 *                 PatientId:
 *                   type: string
 *                 AppointmentDate:
 *                   type: string
 *                 AppointmentTime:
 *                   type: string
 *                 Reason:
 *                   type: string
 *                 Message:
 *                   type: string
 *       400:
 *         description: Bad request
 *       404:
 *         description: Patient not found
 *       500:
 *         description: Server error
 */
router.post('/', createAppointment);

/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Get all appointments
 *     tags: [Appointments]
 *     responses:
 *       200:
 *         description: List of all appointments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   patientId:
 *                     type: string
 *                   appointmentDate:
 *                     type: string
 *                   appointmentTime:
 *                     type: string
 *                   reason:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 */
router.get('/', getAppointments);

export default router;