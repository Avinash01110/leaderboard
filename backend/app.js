import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './utils/errorHandler.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

// Initialize App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect Database
connectDB();

// Demo Route
app.get('/hi', (req, res) => {
    res.json({ message: 'Hello from the backend! 👋' });
  });

// Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;