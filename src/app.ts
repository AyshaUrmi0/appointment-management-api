import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import patientRoutes from './routes/patientRoutes';
import appointmentRoutes from './routes/appointmentRoutes';

export function createApp() {
  const app = express();
  
  // Middleware
  app.use(express.json());
  
  // Routes
  app.use('/api/patients', patientRoutes);
  app.use('/api/appointments', appointmentRoutes);

  /**
   * @swagger
   * /health:
   *   get:
   *     summary: Health check endpoint
   *     tags: [Health]
   *     responses:
   *       200:
   *         description: Server is running
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: "ok"
   *                 message:
   *                   type: string
   *                   example: "Server is running"
   */
  app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
  });

  // Swagger configuration
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Appointment Management API',
        version: '1.0.0',
        description: 'API for creating and managing patient appointments',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server'
        }
      ]
    },
    apis: ['./src/routes/*.ts', './src/app.ts'],
  };

  const specs = swaggerJsdoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  return app;
}
