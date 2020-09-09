import React from 'react'
// import {useState, useEffect} from 'react'
// import axios from 'axios'
import WeatherCall from './WeatherCall'
import TableCreator from './TableCreator'

const API_KEY = process.env.REACT_APP_API_KEY

const ShowOneCountryDetails = ({dat}) => {
  const output = [
    ['capital:',    dat.capital],
    ['population:', dat.population],
    ['languages:', (<ul>{dat.languages.map((l, i) => <li key={i}>{l.name}</li> )}</ul>)]
  ]
  return (
    <div>
      <h1>{dat.name}</h1>
      <TableCreator rows={output} />

      <img src={dat.flag} alt={"Flag of "+ dat.name} height='160' />
      <WeatherCall cityname={dat.capital} apikey={API_KEY}/>
    </div>
  )
}

const ShowOneCountry = ({dat, setDataFilter}) => {
  return (
    <tr>
      <td>{dat.name}</td>
      <td>
        <button onClick={() => setDataFilter(dat.name)}>
          show
        </button>
      </td>
    </tr>
  )
}

//  main
const ShowCountryData = ({dat, dataFilter, setDataFilter}) => {
  // console.log("received dat is", dat)
  /* The first line allows you to pick out single countries,
    whose names are part of different countries, e.g Sudan and South Sudan */
  const toShow =
  dat.some(n => n.name === dataFilter) ?
     dat.filter(p => p.name === dataFilter)
  :
    dat.filter(p => p.name.toLowerCase().includes(dataFilter.toLowerCase()) )
  if (toShow.length === 0)
    return (
      <div>
        No matches
      </div>
    )
  else if (toShow.length === 1)
    return (
      <div>
        <ShowOneCountryDetails dat={toShow[0]} />
      </div>
    )
  else if (toShow.length >= 10)
    return (
      <div>
        Too many matches, please specify further
      </div>
    )
  else
    return (
      <table>
        <tbody>
            {toShow.map(c => <ShowOneCountry dat={c} key={c.name} setDataFilter={setDataFilter} />)}
        </tbody>
      </table>
    )
}
/*
Idea: you can do this:
const var1 = useState()
it renders var1 an array, where var1[0] is the getter and var1[1] is the setter
Idea: pass getters and setters around using arrays;
  although you might have unwanted setters or getters passed around.
*/
export default ShowCountryData
