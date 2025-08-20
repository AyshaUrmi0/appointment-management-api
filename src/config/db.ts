import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    
    if (!mongoUri) {
      console.log('No MongoDB URI found, using default localhost connection');
      await mongoose.connect('mongodb://127.0.0.1:27017/appointment_api');
    } else {
      await mongoose.connect(mongoUri);
    }
    
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};