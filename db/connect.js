const mongoose = require('mongoose')


const connectedDb = (url) => { 
    // return a promise
  return mongoose.connect(url)
}


module.exports = connectedDb