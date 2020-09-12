import React, { useState } from 'react'
import TableCreator from './TableCreator'
import noteService from './Services'

const NameForm = ({persons, setPersons, url}) => {

  const [newName, setNewName] = useState('')
  const [newNum,  setNewNum]  = useState('')

  /* TODO? this should be moved to noteServices.addNote*/
  const handleSubmit = (event) => {
    event.preventDefault()
    // Check for duplicates
    // if (persons.every(p => (p.number !== newNum) && (p.name !== newName) ) && (newName !== '') )
    const checkname = persons.find(p => (p.name === newName))
    const checknum  = persons.find(p => (p.number === newNum))
    if (checkname !== undefined) {
      if (window.confirm(`${checkname.name} already exists. Update phone number for them?`)) {
        noteService.editNote(url, checkname.id, {name: checkname.name, number: newNum}, setPersons, persons)
      }
    }
      // window.alert(`${checkname.name} (${checkname.number}) already exists in the phonebook!`)
    else if (checknum !== undefined)
      window.alert(`${checknum.name} (${checknum.number}) already exists in the phonebook!`)
    else if (newName === '' || newNum === '')
      window.alert(`Enter both fields to add new entry!`)
    else
    {
      const nextPerson = {
        name: newName,
        number: newNum
      }
      setPersons(persons.concat(nextPerson))
      noteService.addNote(url, nextPerson, setPersons, persons)
      setNewName('')
      setNewNum('')
    }

  }
  // Construct part of the displayed content
  const output =
    [
      [
        'name:',
        <input
          value    = {newName}
          onChange = {(event) => setNewName(event.target.value)}
        />],
      [
        'number:',
        <input
          value    = {newNum}
          onChange = {(event) => setNewNum(event.target.value)}
        />
      ]
    ]

  return (
    <form onSubmit={handleSubmit}>
      <TableCreator rows={output} />
      <button type="submit">add </button>
    </form>
  )
}

export default NameForm
