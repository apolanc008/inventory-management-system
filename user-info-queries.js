import express from 'express'
import pool from './db.js' 

const router = express.Router()

router.get('/user', async (req, res) => {
  const sessionUser = req.session?.userId

  if (!sessionUser) {
    return res.status(401).json({ error: 'Not logged in' })
  }

  try {
    const user = await pool.query(
      'SELECT name, lastname, username FROM users WHERE id = $1',
      [sessionUser]
    )

    if (!user.rows.length) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(user.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

router.put('/user', async (req, res) => {
  const { 
    name, 
    lastname, 
    username 
  } = req.body;
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    await pool.query(
      'UPDATE users SET name = $1, lastname = $2, username = $3 WHERE id = $4',
      [name, lastname, username, userId]
    );
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

router.delete('/user', async (req, res) => {
  const userId = req.session?.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1', [userId]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'User not found or already deleted' });
    }

    req.session.destroy(err => {
      if (err) {
        console.error("Session destruction failed:", err);
        return res.status(500).json({ error: 'Failed to destroy session' });
      }

      return res.status(200).json({ message: 'User deleted successfully' });
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ error: 'Failed to delete user' });
  }
});

export default router;