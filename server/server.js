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

app.post('/signup', async (req,res) => {
  const {email,password} = req.body;
  
  if(!email || !password) return res.status(400).json({error: "Missing signup fields" })

  try{
    const hash_password = await bcrypt.hash(password,10)
    const sql = `
               INSERT INTO users(email,hashed_password)
               VALUES($1,$2) RETURNING user_id 
              `;

  const result = await pool.query(sql, [email, hash_password]);
   res.json({ success: true, id: result.rows[0].id });
  }  catch (err){
    console.error("Register error:",err);
    res.status(500).json({error: "Error registering user"})
  }
})

app.post('/login', async (req,res)=>{
  const {email,password} = req.body;

  if(!email || !password){
    return res.status(400).json({error:"Missing Login fields"})
  }

  try{
    const result = await pool.query(`SELECT * FROM users WHERE email =$1`,[email]);

    if(result.rows.length === 0){
      return res.status(401).json({success: false, message: "User not found"});
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.hashed_password);
    
    if(!match){
      return res.status(401).json({success:false,message:"incorrect password"})
    }
   res.json({success:true,message:"Login successful", user:{email: user.email}});
  } catch(err){
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
