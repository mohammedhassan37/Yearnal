import express from 'express';
// Node.JS framework, Handles routes, Creates the server
import cors from 'cors';
// Middleware for express, allows frontend to call backend
import pg from 'pg';
// Connects to postgres, gets and runs SQL queries
import dotenv from 'dotenv';
// Loads .env variables
import path from 'path';

import { fileURLToPath } from 'url'


dotenv.config();
// Loads .env variables

const app = express();
// Creates an express app for routes, middleware, port handling
app.use(express.json());
// allows express app to understand json
app.use(cors());
// allows app to use (initalises) Cross Origin Resource Sharing.

// Create a connection pool to PostgreSQL using environment variables
// This allows us to efficiently run queries without opening a new connection each time
const pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false // required for Render
  }
});




app.get('/',(req,res)=>{
  res.send("meow")
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
