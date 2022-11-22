
const express = require('express')
const cors = require('cors')
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

const todos = [
    {
        id: 123,
        text: "Vitya",
        checked: false,
    }
]

app.get('/todos', (request, response) => {
    response.send(todos)
})

app.post('/todos', (request, response) => {
    console.log(request.body)
    request.body.id = Math.floor(Math.random()*100)
    todos.push(request.body)
    
})