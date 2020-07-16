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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header   name     = {course} />
      <Content  list   = {[part1, part2, part3]} />
      <Total    list   = {[part1, part2, part3]} />
    </div>
  )
}
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//
//   return (
//     <div>
//       <Header name = {course}/>
//       <Content name = {[part1, part2, part3]} value = {[exercises1,exercises2,exercises3]}/>
//       <Total value = {exercises1 + exercises2 + exercises3}/>
//     </div>
//   )
//   // <Content names = {[part1, part2, part3]} values = [exercises1, exercises2, exercises3] />
//   // <Content name = {part2} value = {exercises2}/>
//   // <Content name = {part3} value = {exercises3}/>
// }

ReactDOM.render(<App />, document.getElementById('root'))
