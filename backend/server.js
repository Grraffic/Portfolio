const express = require('express');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projectRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: '*', // Allow all origins for Vercel deployment, or specify your frontend Vercel URL later
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Health check
app.get(['/health', '/_/backend/health'], (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running' });
});

// Routes
// Also accept /_/backend/api/projects for Vercel experimentalServices routing
app.use('/api/projects', projectRoutes);
app.use('/_/backend/api/projects', projectRoutes);

// Error handler (must be last)
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

// Export for Vercel serverless functions
module.exports = app;
