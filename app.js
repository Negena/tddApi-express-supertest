const express = require("express")
const app = express()
const routerIndex = require('./routes/index')
const routerUser = require('./routes/user')
const routerTodo = require('./routes/todos')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/", routerIndex)
app.use("/user", routerUser)
app.use("/todos", routerTodo)



// app.listen(3000, () => {
//     console.log("works")
// })

module.exports = app