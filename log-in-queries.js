import express from 'express';
import pool from './db.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  console.log("Login request body:", req.body);  

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Please provide username and password");
  }

  try {
    const userQuery = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (userQuery.rows.length === 0) {
      return res.status(400).send("Invalid credentials");
    }

    const user = userQuery.rows[0];

    req.session.userId = user.id;

    console.log("Session user ID:", req.session.userId);

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


// ✅ Temporary route to confirm session is being saved
app.get('/test-session', (req, res) => {
  console.log("Session user ID on /test-session:", req.session.userId);
  res.json({ userId: req.session.userId });
});

export default router;
