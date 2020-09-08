import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from './FilterForm'
import NameForm from './NameForm'
import DisplayNames from './DisplayNames'
/**/
const App = () => {

  const [persons, setPersons] = useState([])
  const [peopleFilter, setPeopleFilter] = useState('')
  useEffect( () => {
    axios
      .get('http://localhost:3001/persons')
      .then( resp => {
          setPersons(resp.data)
      })
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
      />

      <h2>Numbers</h2>
      <DisplayNames persons={persons.filter(p => p.name.toLowerCase().includes(peopleFilter.toLowerCase()))}/>

    </div>
  )
// <button onClick={() => console.log('here is the list of names: ', persons)}>debug</button>
}

export default App
