const express = require('express');
const connectDB = require("./dbConnection/db");
const auth = require("./routes/auth")
const cors = require("cors");

const app = express();
app.use(cors())
app.use(express.json()); 
app.use("/auth",auth)
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
