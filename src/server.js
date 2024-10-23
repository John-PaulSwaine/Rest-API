const cors = require('cors')
const express = require('express')
const app = express()
require('dotenv').config()
const User = require('./db/models/userModel')
const userRouter = require('./db/routes/userRoutes')
app.use(express.json())

const syncTables = () => {
    User.sync({alter:true})
};
syncTables()


app.use(userRouter)

app.use(cors())

const port = process.env.PORT || 5001
app.get('/health', (req,res)=>{res.status(200).send('API is healthy')})
app.listen(port, ()=>{console.log(`server listening on port ${port}`)})