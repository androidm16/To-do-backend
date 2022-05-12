const express = require ('express');
const colors = require ('colors');
const morgan = require ('morgan');
const path = require('path');
const todoRoute = require('./routes/todo');
require('dotenv').config()
const Cors = require('cors')
const connectDB = require('./config/db');
// dotenv.config()
connectDB()

const app = express();
app.use(express.json());
app.use(Cors())

if(process.env.NODE === 'development'){
    app.use(morgan('dev'))
}

const PORT = process.env.PORT;

app.use('/api/task', todoRoute)

app.get('/', (req, res) => {
    res.json('API is running good')
})

app.listen(PORT, console.log(`server is running on port ${PORT}`.yellow.bold))