const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/newregistration", (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Data Received: ", req.body);
    
    // Send a response to confirm the request was received
    res.status(200).json({ message: "User registered successfully!" });
});

module.exports = router;
