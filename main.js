
const express = require('express')
const cors = require('cors')
const { request } = require('express')
const app = express()
app.use(cors())
app.use(express.json())


app.listen(5000, () => {
    console.log('...server')
})

app.get('/', (request, response) => {
    // console.log(request)
    response.send('its empy page!!!')
})

let todos = [
    {
        id: 42,
        text: "Vitya",
        checked: false,
    }
]

app.get('/todos', (request, response) => {
    console.log('GET Todos', todos)
    response.send(todos)
})

app.post('/todos', (request, response) => {
    const newTodo = {
        ...request.body,
        id: Math.floor(Math.random() * 100),
        pup: Math.floor(Math.random() * 10),
        testProperty: Math.floor(Math.random() * 10),
    }
    console.log('newTodo', newTodo)
    todos.push(newTodo)
})

app.get('/todos/:id', (request, response) => {
    const id = +request.params.id;
    const todo = todos.find(item => item.id === id);
    response.send(todo);
    console.log(request.params)
    console.log(todo)
})

app.put('/todos/:id', (request, response) => {
    const id = +request.params.id
    const body = request.body
    const todo = { ...body, id: Math.floor(Math.random() * 100), }
    todos = todos.map(item => item.id === id ? { ...item, ...todo } : item)
    response.send(todos)
    // console.log(todos)
    // console.log(todo)
    console.log(todos)
})

app.delete('/todos/:id', (request, response)=>{
    console.log(request.params.id)
    if(request.params.id === undefined){
        response.status(404)
        response.send({
            status:"Eror"
        })
    } else{
        const id = +request.params.id
        todos = todos.filter(item => item.id !==id)
        response.send({
            status:"Succses"
        })
        // console.log(todos)
    }
  
})

