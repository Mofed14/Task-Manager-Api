const express = require('express')
const routes = require('./routes/tasks')
const connectedDb = require('./db/connect')
const app = express()
const port = process.env.PORT || 3000 ;
require('dotenv').config({ path: './env/.env' })

// Middleware
app.use(express.json())

// Routes 
app.use('/api/v1/tasks/', routes)

const start = async ()=> {
    try {
        await connectedDb(process.env.MONGO_URL)
        app.listen(port, console.log(`Server Is Listening On Port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()