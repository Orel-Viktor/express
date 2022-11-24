'use sctrict'

const origin = "http://localhost:5000"
document.querySelector('.js--get').addEventListener('click', async () => {
    let response = await fetch(`${origin}/todos`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    let data = await response.json()
    console.log(response)
    console.log(data)
})

document.querySelector('.js--post').addEventListener('click', async () => {
    let response = await fetch(`${origin}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: 12,
            text: "Orel",
            checked: false,
            pup: null,
        })

    })
    let data = await response.json()
})

document.querySelector('.js--get-id').addEventListener('click', async () => {
    let response = await fetch(`${origin}/todos/42`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({
        //     checked:true
        // }),
    })
    let data = await response.json()
    console.log(data)
})

document.querySelector('.js--put').addEventListener('click', async () => {
    let response = await fetch(`${origin}/todos/2`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            checked: true,
        })
    })
})

document.querySelector('.js--delete').addEventListener('click', async () => {
let response =  await fetch(`${origin}/todos/22`,{
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
})
})