const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Full-Stack Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});