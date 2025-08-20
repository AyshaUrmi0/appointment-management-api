import { createApp } from './app';
import { connectDB } from './config/db';

export class Server {
  private port: number;
  private app: ReturnType<typeof createApp>;

  constructor(port: number) {
    this.port = port;
    this.app = createApp();
  }

  async start(): Promise<void> {
    try {
      // Connect to database
      await connectDB();
      console.log('✅ MongoDB connected successfully');

      // Start listening
      this.app.listen(this.port, () => {
        console.log(`🚀 Server running on port ${this.port}`);
        console.log(`📚 Swagger docs available at http://localhost:${this.port}/api-docs`);
        console.log(`🏥 Health check at http://localhost:${this.port}/health`);
        console.log(`👥 Patients API: http://localhost:${this.port}/api/patients`);
        console.log(`📅 Appointments API: http://localhost:${this.port}/api/appointments`);
      });
    } catch (error) {
      console.error('❌ Failed to start server:', error);
      process.exit(1);
    }
  }

  getApp() {
    return this.app;
  }
}
