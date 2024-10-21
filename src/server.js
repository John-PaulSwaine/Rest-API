const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5001
app.use(express.json())





app.get('/health', (req,res)=>{res.status(200).send('API is healthy')})
app.listen(port, ()=>{console.log(`server listening on port ${port}`)})