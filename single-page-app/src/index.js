import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

const App = () => {

  const [notes, setNotes] = useState([])
  // const promise1 = axios.get('http://localhost:3001/notes')
  // promise1.then(response => {
  //   console.log("received:", response.header, response)
  //   // console.log("data:", response.data)
  // })
  // console.log(promise1)
  //
  // axios
  //   .get('http://localhost:3001/remarks')
  //   .then(response => {
  //     console.log("received:", response.header, response)
  //     // console.log("data:", response.data)
  // })

  useEffect( () => {
    console.log('effect 1')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise - notes fulfilled')
        setNotes(response.data)
      })
      /* This concat ain't working */
    // axios
    //   .get('http://localhost:3001/remarks')
    //   .then(response => {
    //     console.log('promise - remarks fulfilled')
    //     setNotes(notes.concat(response.data))
    //   })
  }, [])  /* This empty array defines which states' changes cause this effect hook to trigger.
              Or something along the lines of it*/

  // useEffect( () => {
  //   console.log('effect 2')
  //   axios
  //     .get('http://localhost:3001/remarks')
  //     .then(response => {
  //       console.log('promise - remarks fulfilled')
  //       setNotes(notes.concat(response.data))
  //     })
  // }, [])
  console.log('render', notes.length, 'notes')

  return (
    <div>
      <div>
        Full Stack Course of 2020, part 2-c
      </div>
      <div>
      This part introduces JSON server and the basics of backend operations
      </div>
      <ul>
        {notes.map(n => <li key={n.id}>{n.content}</li>)}
      </ul>
    </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
