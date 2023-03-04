const mongoose = require('mongoose')
const URl = 'mongodb://localhost/taskManager'


mongoose.connect(URl)
.then(()=> console.log('Connected To DB...'))
.catch((err)=> console.log(err))