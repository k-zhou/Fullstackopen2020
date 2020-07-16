import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
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
  props.course.parts.forEach(obj => output.push(<Part part = {obj}/> ))  //DEBUG
  return <div>{output}</div>
}

const Total = (props) => {
  let sum = 0
  props.course.parts.forEach(obj => sum += obj.exercises)
  return <p>Number of exercises {sum}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header   course = {course}/>
      <Content  course = {course}/>
      <Total    course = {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
