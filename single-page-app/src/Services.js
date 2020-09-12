// import React from 'react'
import axios from 'axios'

const getNotes = (url, setter) => {
  axios
    .get(url)
    .then( resp => {
      // console.log(`response received, data: ${resp.data}`)
      setter(resp.data)
    })
    .catch( error =>
      console.log(`error: ${error}`)
    )
}
const addNote = (url, newNote, setter, getter) => {
  axios
    .post(url, newNote)
    .then( resp => {
      console.log(`added note`)
      setter(getter.concat(resp.data))
    })
    .catch( error => {
      console.log(`error adding note: ${error}`)
    })
}
const deleteNote = (url, id, setter, getter) => {
  axios
    .delete(`${url}/${id}`)
    .then( resp => {
      console.log(`deleted note`)
      setter(getter.filter(n => n.id !== id))
    })
    .catch( error => {
      console.log(`error deleting note: ${error}`)
    })
}
const editNote = (url, id, newNote, setter, getter) => {
  axios
    .put(`${url}/${id}`, newNote )
    .then( resp => {
      console.log(`edited note`)
      setter(getter.map(n => n.id !== id ? n : newNote ))
    })
    .catch( error => {
      console.log(`error editing note: ${error}`)
    })
}

export default {
  getNotes,
  addNote,
  deleteNote,
  editNote
}
