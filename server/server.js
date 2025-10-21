import express from 'express';
// Node.JS framework, Handles routes, Creates the server
import cors from 'cors';
// Middleware for express, allows frontend to call backend
import pg from 'pg';
// Connects to postgres, gets and runs SQL queries
import dotenv from 'dotenv';
// Loads .env variables
import path from 'path';

import bcrypt from 'bcrypt'

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






app.post("/signup", async (req,res) => {
  // asynchourous API, waits for respond and etc
  try{
    // get the input values  from frontend
    const {email, password, confirmPassword} = req.body;

    // validates if inputs are empty, if any send status of 400
    if(!email || !password || !confirmPassword){
      return res.status(400).json({success:false,message:"Need All required fields"})
    }

    // validates passwords to see if they're matching
    if(password !== confirmPassword){
      return res.status(400).json({success:false, message:"Passwords do not match"})
    }


    const [existingUser] = await db.query(`SELECT * FROM users WHERE email = ?`, email)
    if(existingUser.length > 0){
      return res.status(400).json({success:false,message:"Email has already been registered"})
    }

    const hashedPassword = await bcrypt.hash(password,10);

   const [results] = await db.query
   (`INSERT INTO users (email,hashedPassword) VALUES (?,?)`,
    [ email, hashedPassword]);

    return res.status(201).json({success:true,message:"User registered"})

  }catch(err){
    console.error(err);
    return res.status(500).json({success:false,message:"Server error"})
  }
})









const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
