const cors = require('cors')
const express = require('express')
const app = express()
require('dotenv').config()
const connection = require('./db/connection')
app.use(express.json())
app.use(cors())

connection()



const port = process.env.PORT || 5001
app.get('/health', (req,res)=>{res.status(200).send('API is healthy')})
app.listen(port, ()=>{console.log(`server listening on port ${port}`)})