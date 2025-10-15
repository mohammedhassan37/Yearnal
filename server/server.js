import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// check 

const pool = new pg.Pool({
user:process.env.DB_USER,
password:process.env.DB_PASSWORD,
host:process.env.DB_HOST,
port:process.env.DB_PORT,
database:process.env.DB_NAME
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({ message: "Backend is working!", time: result.rows[0] });
});


const PORT = 5000 || process.env.DB_PORT;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});