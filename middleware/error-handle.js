const { CustomApiError } = require('../errors/custom-error')
const errorHandler =  (err, req, res, next) => {
    if(err instanceof CustomApiError){ 
        // console.log(err instanceof CustomApiError)
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).send({ error: err.message })
}

module.exports = errorHandler
