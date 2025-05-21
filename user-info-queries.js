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

export default router