import dotenv from 'dotenv';
import { Server } from './server';


dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const server = new Server(PORT);
server.start();