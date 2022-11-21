
const express = require('express')
const app = express()


app.listen(5000, () => {
    console.log('...server')
})

app.get('/', (request, response) => {
// console.log(request)
response.send('its empy page')
})