// FullStack Open exercise 1-d "Anecdotes"

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => <button onClick={props.handleClick}>{props.label}</button>

const ShowTopAnecdote = (props) => {
  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      {props.text}
    </div>
  )
}

// note to self: do not use Array.sort() nor Array.reverse() cuz they affect the array itself,
//unlike in Scala where everything seems to be a copy by default
const findMaxFromArr = (arr) => {
  let a = [...arr]
  let maxi = 0
  for (let i=1; i<a.length; ++i) {
    if (a[i]>a[maxi]) maxi = i
  }
  return maxi
}

const App = (props) => {
  // init
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  // console.log("the votes are", votes, " and the selected is", selected, "top anec is number", findMaxFromArr(votes)) //DEBUG

  const handleAnecdotes = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleAnecdoteVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    return setVotes([...copy])
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      <Button handleClick={() => handleAnecdoteVotes()} label="vote"/>
      <Button handleClick={() => handleAnecdotes()} label="next anecdote"/>
      <br />
      this anecdote has {votes[selected]} votes
      <br />
      <ShowTopAnecdote text={anecdotes[findMaxFromArr(votes)]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
