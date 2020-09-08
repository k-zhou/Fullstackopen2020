import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from './FilterForm'
import ShowCountryData from './ShowCountryData'
/**/
const App = () => {

  const [rdata, setRdata] = useState([])
  const [dataFilter, setDataFilter] = useState('')

  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( resp => {
          setRdata(resp.data)
      })
  }, [])  // note to self: remember to add the empty array, else it will endlessly call GET

  return (
    <div>
      <h2>Country facts</h2>
      <FilterForm filter   ={dataFilter}
                  setFilter={setDataFilter}
      />
      <ShowCountryData  dat          ={rdata}
                        dataFilter   ={dataFilter}
                        setDataFilter={setDataFilter}

      />
    </div>
  )
  // <h3>Add a new entry:</h3>
  // <NameForm persons     ={persons}
  //           setPersons  ={setPersons}
  // />
  // <h2>Numbers</h2>
  // <DisplayNames persons={persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))}/>

// <button onClick={() => console.log('here is the list of names: ', persons)}>debug</button>
}

export default App
