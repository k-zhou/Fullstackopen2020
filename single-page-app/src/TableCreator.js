import React from 'react'

const OneRow = ({row}) => <tr>{row.map((n, i) => <td key={i}>{n}</td>)}</tr>

/* Takes an array of arrays and outputs it neatly as a table */
/* Writes each nested array as a row */
const TableCreator = ({rows}) => {
  return (
    <table>
      <tbody>
        {rows.map((r, i) => <OneRow row={r} key={i}/>)}
      </tbody>
    </table>
  )
}

export default TableCreator
