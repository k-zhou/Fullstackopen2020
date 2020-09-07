import React, { useState } from 'react'

const NameForm = ({persons, setPersons}) => {

  const [newName, setNewName] = useState('')
  const [newNum,  setNewNum]  = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // check for duplicates
    if (persons.every(p => (p.number !== newNum) && (p.name !== newName) ))
    {
      const nextPerson = {
        name: newName,
        number: newNum,
        id:   persons.length + 1
      }
      setPersons(persons.concat(nextPerson))
      setNewName('')
      setNewNum('')
    }
    else
    {
      window.alert(`${newName} already exists in the phonebook!`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <table>
          <tbody>
            <tr>
              <td>name:</td>
              <td><input
               value    = {newName}
               onChange = {(event) => setNewName(event.target.value)}
               /></td>
           </tr>
           <tr>
             <td>number:</td>
             <td><input
               value    = {newNum}
               onChange = {(event) => setNewNum(event.target.value)}
             />
             </td>
           </tr>
        </tbody>
      </table>
    </div>
    <div>
      <button type="submit">add </button>
    </div>
  </form>
  )
}
export default NameForm
