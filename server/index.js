// console.log('Hello World! This is a simple server.')
const http = require('http')
const express = require('express')
// this is basic stuff without Express
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' })
//   response.end('Hello World! This is a simple server.')
// })

// Init
const app = express()
let people_h_ = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

// Landing page
app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1><p>This is a simple server.</p><p>It has people data in it.</p>')
})

// People pages
app.get('/api/persons/', (req, res) => {
  res.json(people_h_)
})

app.get('/api/persons/:id', (req, res) => {
  const id_ = Number(req.params.id)
  // console.log("id is", id_ ) // DEBUG
  // people_h_.map(p => console.log(p.id, p.name, p.number)) // DEBUG
  const found = people_h_.find(n => n.id === id_ )
  if (found)
    res.json(found)
  else
    res.status(404).end('<h1>404 Person not found</h1>')
})

//
app.get('/info', (req, res) => {
  const output = `
    <h1>Info</h1>
    <p>There are currently ${people_h_.length} people in the phonebook.<p>
    <p>${new Date()}</p>
  `
  res.send(output)
})
// Run server
const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)
