const Task = require('../models/task');
const asyncWrapper = require('../middleware/async')
const getAllTasks = asyncWrapper( async (req, res)=> {
     const tasks = Task.find({})
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

const getTask = asyncWrapper (async (req, res)=> {
      const { id } = req.params
   const task = await Task.findOne({_id:id})
   if(!task){
      return res.status(404).json({msg: `There is No Task with ID ${id}`})
   }
     res.status(200).json({
      msg: 'Success',
      task: task
   })
})



const deleteTask = async (req, res)=> {
   try {
      const { id } = req.params
      const task =  await Task.findByIdAndDelete({_id: id})
      if(!task){
         return res.status(404).json({msg: `There is No Task with ID ${id}`})
      }
       res.status(200).json({
         task: null,
        msg: 'This Task Is Deleted'
      })
   } catch (error) {
      res.status(500).json({
         error: error.message
      });
   } 
}

const UpdateTask = async (req, res)=> {

   try {
      const {id} = req.params
   const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
   });
   if(!task){
      return res.status(404).json({msg: `There is No Task with ID ${id}`})
   }
   res.status(201).json({
     id: id,
     task: task
     
   })
   } catch (error) {
      res.status(500).json({
         error: error.message
      }); 
   }

}

module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    UpdateTask,
    deleteTask
}