import React, { useState } from 'react'

const NameForm = ({persons, setPersons, newName, setNewName}) => {

  const handleSubmit = (event) => {
    // console.log('prevented default', event.target)
    event.preventDefault()

    // check for duplicates
    if (persons.every(p => p.name !== newName))
    {
      const nextPerson = {
        name: newName,
        id:   persons.length + 1
      }
      setPersons(persons.concat(nextPerson))
    }
    else
    {
      window.alert(`${newName} already exists in the phonebook!`)
    }
    setNewName('')
  }
  const handleChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input
          value    = {newName}
          onChange = {handleChange}
        />
      </div>
      <div>
        <button type="submit">add </button>
      </div>
    </form>
  )
}
export default NameForm
