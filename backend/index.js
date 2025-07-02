const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

const PORT = process.env.PORT || 8000; 

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);
app.use("/hello", (req, res) => {
  res.send("Hello from backend");
});

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Connected to DB");
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to DB:", error);
    });

