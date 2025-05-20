import express from 'express';
import cors from 'cors';

import pool from './db.js';
import loginRouter from './log-in-queries.js'

const app = express() 

const port = 3000 

app.use(cors({
  origin: "http://localhost:3001",
  methods: ["POST", "GET", "OPTIONS"],
  credentials: true
}));
app.use(express.json())

let users = [];

// CRUD API
// API function 1 - create user
app.post("/user", async (req, res) => {
  const {
    name,
    lastname,
    username,
    email,
    password,
    confirmPassword
  } = req.body;

  if (!name || !lastname || !username || !email || !password || !confirmPassword) {
    return res.status(400).send("All fields are required");
  }

  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match");
  }

  try {
    const existing = await pool.query(
      "SELECT * FROM users WHERE username = $1 OR email = $2",
      [username, email]
    );

    if (existing.rows.length > 0) {
      return res.status(400).send("Username or email already exists");
    }

    await pool.query(
      "INSERT INTO users (name, lastname, username, email, password) VALUES ($1, $2, $3, $4, $5)",
      [name, lastname, username, email, password]
    );

    res.status(200).send("User created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.use('/', loginRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});