const express = require("express")
const router = express.Router()

const todos = [
    {
        id: 1, 
        name: "do something", 
        completed: false
    }
]

// /todos/
router.get("/", (req,res, next) => {
    res.json(todos)
})

router.get("/:id", (req,res, next) => {

    const found = todos.find((t) => t.id === Number(req.params.id))

    if(!found) {
        res.status(404).json("not found")
    }
    res.json(found)
})

// /todos post 
router.post("/todo", (req,res, next) => {
    const {body} = req
    
    const newTodo = {
        id: todos.length + 1 , 
        name: body.name, 
        completed: false
    }

    todos.push(newTodo)

    res.status(201).json(newTodo)
})

// get todos 

router.post("/", (req,res) => {
    const {body} = req

    if (typeof req.body.name !== "string") {
       return res.status(422).json({err: "error"})
    }
   else {
    const newTodo = {
        id: todos.length + 1, 
        name: body.name, 
        completed: false
    }

    todos.push(newTodo)

    res.status(201).json(newTodo)
   }
})


module.exports = router