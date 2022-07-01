const express = require('express');
require('dotenv').config()
const cors = require('cors');
const mongoose =  require('mongoose')

const router = require('./routes/routes.js');

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL

app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

mongoose.connect(DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT} and connected to Atlas.`)
    });
}).catch((err) => {
    console.log(err);
})