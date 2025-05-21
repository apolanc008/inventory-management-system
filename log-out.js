import express from "express"

const router = express.Router()

router.post("/logout", (req, res) => {
  req.session?.destroy(() => {
    res.clearCookie("connect.sid") 
    res.status(200).send("Logged out")
  })
})

export default router
