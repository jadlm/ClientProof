import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRoutes from './routes/projects.routes';
import leadsRoutes from './routes/leads.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ClientProof API is running' });
});

// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/leads', leadsRoutes);

// Start Server
app.listen(port, () => {
  console.log(`🚀 Backend server running at http://localhost:${port}`);
});
