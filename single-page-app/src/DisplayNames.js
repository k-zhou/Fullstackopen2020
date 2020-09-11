import React from 'react'
import TableCreator from './TableCreator'

const DisplayNames = ({persons}) => {
  let output = []
  persons.map( (p, i) => output = output.concat( [p.name, p.number, <button onClick={() => console.log(`clicked on number ${i}`) }>{i}</button> ] ) )
  return (
    <div>

    </div>
  )
  // <TableCreator rows={output}/>
}

export default DisplayNames
