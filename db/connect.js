const mongoose = require('mongoose')
const URl = 'mongodb://localhost/taskManager'


const connectedDb = (url) => { 
    // return a promise
  return mongoose.connect(URl)
}


module.exports = connectedDb