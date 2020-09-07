import React from 'react'

const DisplayNames = ({persons}) => {
  return (
    <table>
      <tbody>
        {persons.map((p, i) => <tr key={p.name}><td>{p.name}</td><td>{p.number}</td></tr>)}
      </tbody>
    </table>
  )
}

export default DisplayNames
