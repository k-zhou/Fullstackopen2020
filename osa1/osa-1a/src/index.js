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
  return (
    <div>
      <p>
        {props.name} {props.value}
      </p>
    </div>
  )
}

// tuli kokeiltua asioita ta'ssa', en tied' onko hyva'ntapaista koodia
const Content = (props) => {
  var output = [];
  for (var i = 0; i < props.name.length; ++i) {
    output = output.concat(<p>{props.name[i]} {props.value[i]}</p>)
  }
  return (
    <div>
      {output}
    </div>
  )
  // output = output.concat(<p>It: {i}</p>) //DEBUG
  // output = output.concat(<p>This is another line.</p>)
  // output = output.concat(<p>This is yet another line.</p>)
  // return (
  //   <div>
  //     <Part name = "test1" value = {1}/>
  //     <Part name = "test2" value = {2}/>
  //     <Part name = "test3" value = {3}/>
  //   </div>
  // )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.value}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course}/>
      <Content name = {[part1, part2, part3]} value = {[exercises1,exercises2,exercises3]}/>
      <Total value = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
  // <Content names = {[part1, part2, part3]} values = [exercises1, exercises2, exercises3] />
  // <Content name = {part2} value = {exercises2}/>
  // <Content name = {part3} value = {exercises3}/>
}

ReactDOM.render(<App />, document.getElementById('root'))
