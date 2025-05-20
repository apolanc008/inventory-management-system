import express from 'express';
import pool from './db.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Please provide username and password");
  }

  try {
    const userQuery = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (userQuery.rows.length === 0) {
      return res.status(400).send("User not found");
    }

    const user = userQuery.rows[0];

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send("Incorrect password");
    }

    res.status(200).json({ message: "Login successful", user: { id: user.id, username: user.username } });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;