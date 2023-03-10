const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name : { 
        type: String, 
        required: [true, 'Must Provide Name'], 
        trim: true ,
        minLength: [3, "name can not be lss than 3 characters"],
        maxLength: [20, "name can not be more than 20 characters"],
        unique: true
    },
    completed: {
        type: Boolean,
        default: false
    },
});


module.exports = mongoose.model('Task', TaskSchema);;