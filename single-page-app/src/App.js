import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import FilterForm from './FilterForm'
import NameForm from './NameForm'
import DisplayNames from './DisplayNames'
import noteService from './Services'
import NotificationBox from './NotificationBox'

const App = () => {

  const url = 'http://localhost:3001/persons'
  const [persons, setPersons] = useState([])
  const [peopleFilter, setPeopleFilter] = useState('')
  const [msgTflipflop, setMsgTflipflop] = useState(true)
  const [notificationMsg, setNotificationMsg] = useState('Hello World')
  const [notificationTime, setNotificationTime] = useState(3000)
  const [notificationType, setNotificationType] =useState('notification')

  useEffect( () => {
    noteService.getNotes(url, setPersons)
  }, [])  // note to self: remember to add the empty array, else it will endlessly call GET

  const showNotification = (msg, time, type) => {
    setNotificationMsg(msg)
    setNotificationTime(time)
    setNotificationType(type)
    setMsgTflipflop(!msgTflipflop)
  }

  return (
    <div>
      <NotificationBox msg={notificationMsg} time={notificationTime} type={notificationType} signal={msgTflipflop} />

      <h2>Phonebook</h2>
      <FilterForm peopleFilter        ={peopleFilter}
                  setPeopleFilter     ={setPeopleFilter}
      />
      <div>
      <h3>Add a new entry:</h3>
      <NameForm persons     ={persons}
                setPersons  ={setPersons}
                url         ={url}
                notify    ={showNotification}
      />
      </div>
      <h2>Numbers</h2>

      <DisplayNames persons   ={persons}
                    setPersons={setPersons}
                    filter    ={peopleFilter}
                    url       ={url}
                    notify    ={showNotification}
      />
    </div>
  )
/*
DEBUG
<button onClick={ () => setMsgTflipflop(!msgTflipflop)}>(DEBUG) show notification again</button>
<button onClick={ () => {setNotificationMsg('this is a notification'); setNotificationType('notification'); setMsgTflipflop(!msgTflipflop)}}>(DEBUG) show some notification </button>
<button onClick={ () => {setNotificationMsg('this is an error');       setNotificationType('error');        setMsgTflipflop(!msgTflipflop)}}>(DEBUG) show some error</button>

<button onClick={() => console.log(`here is the full list of names: ${persons}`)}>debug</button>
<button onClick={ () => noteService.getNotes(url, setPersons)}>(DEBUG) refresh list</button>
*/
}

export default App
