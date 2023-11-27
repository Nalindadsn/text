import mongoose, { Schema } from "mongoose"

//create model schema
const  todoSchema =  new mongoose.Schema({
    title:{
        type:String,
    },
    todo:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
   
});
const todoList = mongoose.models.todoSchema || mongoose.model("todoSchema", todoSchema);
export default todoList;