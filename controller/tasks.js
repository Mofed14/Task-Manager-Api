
const getAllTasks =  (req,res)=>{
    res.send('Get ALl Tasks')
}

const createTask = (req, res)=> {
   res.send('Create task')
}

const getTask = (req, res)=> {
   res.status(200).json({id: req.params.id});
}

const UpdateTask = (req, res)=> {
   res.send('Update Task');
}

const deleteTask = (req, res)=> {
   res.send('Delete Task');
}

module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    UpdateTask,
    deleteTask
}