import React, { useState } from 'react'
import NameForm from './NameForm'

const NamesList = ({persons}) => {
  return (
    <ul>
      {persons.map((p, i) => <li key={p.name}>{p.name}</li>)}
    </ul>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <NameForm persons={persons}
                setPersons={setPersons}
                newName={newName}
                setNewName={setNewName} />

      <h2>Numbers</h2>
      <NamesList persons={persons}/>

    </div>
  )
// <button onClick={() => console.log('here is the list of names: ', persons)}>debug</button>
}

export default App
