const express = require('express')
const routes = express.Router()
const { 
    getAllTasks, 
    createTask,
    UpdateTask,
    getTask,
    deleteTask,
} = require('../controller/tasks')
routes.route('/').get(getAllTasks).post(createTask)
routes.route('/:id').put(UpdateTask).get(getTask).delete(deleteTask)

module.exports =  routes