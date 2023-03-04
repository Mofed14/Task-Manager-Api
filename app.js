const express = require('express')
const routes = require('./routes/tasks')
require('./db/connect')
const app = express()
const port = 3000

// Middleware
app.use(express.json())

// Routes 
app.use('/api/v1/tasks/', routes)
app.listen(port, console.log(`Server Is Listening On Port ${port}...`))