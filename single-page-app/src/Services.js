// import React from 'react'
import axios from 'axios'

const getNotes = (url, setter) => {

  axios
    .get(url)
    .then( resp => {
      setter(resp.data)
    })
    .catch( error =>
      console.log(`error: ${error}`)
    )
}
const addNote = (url, newNote, setter, getter) => {
  return new Promise( (resolve, reject) => {
    axios
      .post(url, newNote)
      .then( resp => {
        setter(getter.concat(resp.data))
        resolve('Successfully added note')
      })
      .catch( error => {
        reject(`${error}`)
      })
  })
}
const deleteNote = (url, id, setter, getter) => {
  return new Promise( (resolve, reject) => {
    axios
      .delete(`${url}/${id}`)
      .then( resp => {
        setter(getter.filter(n => n.id !== id))
        resolve('Successfully deleted note')
      })
      .catch( error => {
        reject(`${error}`)
      })
  })
}
const editNote = (url, id, newNote, setter, getter) => {
  return new Promise( (resolve, reject) => {
    axios
      .put(`${url}/${id}`, newNote )
      .then( resp => {
        setter(getter.map(n => n.id !== id ? n : newNote ))
        resolve('Successfully edited note')
      })
      .catch( error => {
        reject(`${error}`)
      })
  })
}

export default {
  getNotes,
  addNote,
  deleteNote,
  editNote
}
