import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import FilterForm from './FilterForm'
import NameForm from './NameForm'
import DisplayNames from './DisplayNames'
import noteService from './Services'

const App = () => {

  const [persons, setPersons] = useState([])
  const [peopleFilter, setPeopleFilter] = useState('')
  const url = 'http://localhost:3001/persons'

  useEffect( () => {
    noteService.getNotes(url, setPersons)
  }, [])  // note to self: remember to add the empty array, else it will endlessly call GET

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm peopleFilter        ={peopleFilter}
                  setPeopleFilter     ={setPeopleFilter}
      />
      <h3>Add a new entry:</h3>
      <NameForm persons     ={persons}
                setPersons  ={setPersons}
                url         ={url}
      />

      <h2>Numbers</h2>

      <DisplayNames persons   ={persons}
                    setPersons={setPersons}
                    filter    ={peopleFilter}
                    url       ={url}
      />
    </div>
  )
/*
DEBUG
<button onClick={() => console.log(`here is the full list of names: ${persons}`)}>debug</button>
<button onClick={ () => noteService.getNotes(url, setPersons)}>(DEBUG) refresh list</button>
*/
}

export default App
