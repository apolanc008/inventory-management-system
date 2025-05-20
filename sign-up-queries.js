import express from 'express';
import cors from 'cors';

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
app.post("/user", (req, res) => {
    const {
        name,
        lastname,
        username,
        email,
        password,
        confirmPassword
    } = req.body

    if (!name || !lastname || !username || !email || !password || !confirmPassword) {
        return res.status(400).send("All fields are required");
    }

     if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match");
    }
    
    const newUser = {
        name,
        lastname,
        username,
        email,
        password
    }

    users.push(newUser)

    res.status(200).send("User created successfuly");

});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});