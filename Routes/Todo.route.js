const express = require("express");
const { TodoModel } = require("../Model/Todo.model")

const todoRoutes = express.Router();

todoRoutes.get("/todos", async(req,res) => {

    try {
        const todos = await TodoModel.find();
        res.status(200).send(todos);
    } 
    
    catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal Server Error" });
    }
})


todoRoutes.post("/add/todos", async(req,res) => {

    const paylaod = req.body;

    try {
        const todo = new TodoModel(paylaod);
        await todo.save();
        res.status(201).send({"Message":"Todo Created Successfully"});
    } 
    
    catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal Server Error" });
    }
})


todoRoutes.patch("/todos/edit/:id", async(req,res) => {

    const { status } = req.body;
    const { id } = req.params;

    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(id,{status}, {new:true});

        if(!updatedTodo){
            return res.status(404).send({"message": 'Todo not found' });
        }
        res.status(200).send({"message":"Status updated successfully", updatedTodo});
    } 
        
    catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal Server Error" });
    }
})

todoRoutes.delete("/todos/delete/:id", async(req,res) => {

    const {id} = req.params;
    
    try{
        await TodoModel.findByIdAndDelete(id);
        res.status(200).send({"message": "Todo deleted successfully"});
    }

    catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal Server Error" });
    }
})

module.exports =  { todoRoutes };



