const Task = require('../models/task');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const getAllTasks = asyncWrapper( async (req, res)=> {
   const tasks = await Task.find({})
    res.status(200).json(tasks)
})


const createTask = asyncWrapper (
   async (req, res)=> {
         const task = await Task.create(req.body)
         res.status(201).json({
            msg: "Success",
            task: task
         });

   }) 

const getTask = asyncWrapper (async (req, res, next)=> {
      const { id } = req.params
   const task = await Task.findOne({_id:id})
   if(!task){
     return next(createCustomError(`There is No Task with ID ${id}`, 404))
      // return res.status(404).json({msg: `There is No Task with ID ${id}`})
   }
     res.status(200).json({
      msg: 'Success',
      task: task
   })
})



const deleteTask = asyncWrapper( async (req, res)=> {
      const { id } = req.params
      const task =  await Task.findByIdAndDelete({_id: id})
      if(!task){
         return next(createCustomError(`There is No Task with ID ${id}`, 404))
      }
       res.status(200).json({
         task: null,
        msg: 'This Task Is Deleted'
      })
   
})

const UpdateTask = asyncWrapper( async (req, res, next)=> {

      const {id} = req.params
      const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
   });
   if(!task){
      return next(createCustomError(`There is No Task with ID ${id}`, 404))
   }
   res.status(201).json({
     id: id,
     task: task
     
   })

})

module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    UpdateTask,
    deleteTask
}