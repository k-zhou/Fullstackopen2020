import React, { useState } from 'react'
import FilterForm from './FilterForm'
import NameForm from './NameForm'
import DisplayNames from './DisplayNames'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [peopleFilter, setPeopleFilter] = useState('')

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
