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
app.use(express.json())
let orig_data_h_ = [
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
let people_h_ = orig_data_h_.slice()

// functions
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

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
  const found = people_h_.find(p => p.id === id_ )
  if (found)
    res.json(found)
  else
    res.status(404).end('<h1>404 Person not found</h1>')
})

// General info
app.get('/info', (req, res) => {
  const output = `
    <h1>Info</h1>
    <p>There are currently ${people_h_.length} people in the phonebook.<p>
    <p>${new Date()}</p>
  `
  res.send(output)
})

// Add a new person, does not check pre-existing people yet
app.post('/api/persons/', (req, res) => {
  // find unused id
  const MAX_RANDOM = 1000000
  let new_id_   = getRandomInt(MAX_RANDOM)
  while ( people_h_.filter( p => p.id === new_id_ ).length > 0 )  // untested for falsies and truthies
    new_id_     = getRandomInt(MAX_RANDOM)
  
  let new_note_ = req.body
  console.log("Received new POST request:", req.headers["content-type"], "- assigned", new_id_, "\n", new_note_) // DEBUG
  if (req.headers["content-type"] === "application/json") {
    new_note_.id  = new_id_
    people_h_ = people_h_.concat(new_note_)
    res.status(200).end()
  } 
  else {
    res.status(404).end()
  }
})

// Remove a person, handles non-existent entries
app.delete('/api/persons/:id', (req, res) => {
  const id_ = Number(req.params.id)
  if (people_h_.find(p => p.id === id_)) {
    people_h_ = people_h_.filter( p => p.id !== id_ )
    res.status(204).end()
  } else {
    res.status(404).end()
  }
})

// Run server
const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)
