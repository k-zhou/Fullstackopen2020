import React from 'react';    // have to include this at the least
// import ReactDOM from 'react-dom'; // I wonder when this is strictly necessary

const TotalEx = ({course}) => {
  const n = course.parts.reduce((sum, part) => part.exercises + sum, 0 )
  return (
    <tr><td colSpan="2"><b>
      total of {n} exercises
    </b></td></tr>
  )
}

const Part = ({part}) => {
  return (
    <tr><td>{part.name}</td><td>{part.exercises}</td></tr>
  )
}

const Content = ({course}) => {
  return (
    <table>
      <tbody>
        {course.parts.map( part => <Part key={part.id} part={part}/>) }
        <TotalEx course={course}/>
      </tbody>
    </table>
  )
  // note to self: div -> table -> tbody -> tr -> td
}

const Header = (props) => {
  return (
    <h2>{props.course.name}</h2>
  )
}

const Course = ({course}) => {
  // console.log(props) // this is an object
  // console.log(course)
  return (
    <div>
      <Header   course={course}/>
      <Content  course={course}/>
    </div>
  )
}
export default Course
