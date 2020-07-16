import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  // console.log("name: " + props.part.name + " ex: " + props.part.exercises ) //DEBUG
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Content = (props) => {
  let output = []
  /* note: the scope of a "let" variable is the BLOCK it's defined in. The scope of "var" is the entire function. */
  props.list.forEach(obj => output.push(<Part part = {obj}/> ))  //DEBUG
  return <div>{output}</div>
}

const Total = (props) => {
  let sum = 0
  props.list.forEach(obj => sum += obj.exercises)
  return (
    <div>
      <p>
        Number of exercises {sum}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header   name     = {course} />
      <Content  list     = {parts}  />
      <Total    list     = {parts}  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
