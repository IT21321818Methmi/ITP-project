const express = require('express')
const cors = require('cors') 
const dotenv = require("dotenv").config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

//Create PORT
const PORT = process.env.PORT || 5000;


connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/teacher', require('./routes/Teachers'))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
