const express = require('express')
const routes = require('./routes/tasks')
const connectedDb = require('./db/connect')
const app = express()
const port = 3000

// Middleware
app.use(express.json())

// Routes 
app.use('/api/v1/tasks/', routes)

const start = async ()=> {
    try {
        await connectedDb()
        app.listen(port, console.log(`Server Is Listening On Port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()