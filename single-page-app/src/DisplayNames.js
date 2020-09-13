import React from 'react'
import TableCreator from './TableCreator'
import noteService from './Services'

// const handleRemoval = (url, id, persons, setPersons) => {
//
// }
const DisplayNames = ({persons, setPersons, filter, url, notify}) => {

  const output = new Array(persons.length)
  persons
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .map( (p, i) => output[i] =
      [
        p.name,
        p.number,
        <button onClick={ () => {
          if (window.confirm(`Delete ${p.name}?`)) {
            noteService
              .deleteNote(url, p.id, setPersons, persons)
              .then( resp => notify(`Successfully deleted ${p.name}.`, 5000, 'notification'))
              .catch( error => notify(`Cannot delete ${p.name} - ${error}`, 10000, 'error'))
          }
        }} >
          remove
        </button>
      ]
    )
  // console.log(`output is ${output}, length of output is ${output.length}`)

  return (
    <div>
      <TableCreator rows={output}/>
    </div>
  )
}

export default DisplayNames
