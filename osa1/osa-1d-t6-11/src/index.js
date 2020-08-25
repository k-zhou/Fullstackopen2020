// FullStack Open exercise 1-d "Unicafe"

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = (props) => (<tr><td>{props.label}</td><td>{props.value}{props.aftertext}</td></tr>)

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad <= 0)
    return (<div>No feedback given</div>)
  else
    return (
      <table>
        <tbody>
          <StatisticLine label="good"    value={props.good} />
          <StatisticLine label="neutral" value={props.neutral} />
          <StatisticLine label="bad"     value={props.bad} />
          <StatisticLine label="all"     value={props.good + props.neutral + props.bad} />
          <StatisticLine label="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
          <StatisticLine label="positive"value={(props.good            ) / (props.good + props.neutral + props.bad) *100} aftertext="%" />
        </tbody>
      </table>
    )
}

const Button = (props) => <button onClick={props.handleClick}>{props.label}</button>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} label="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} label="neutral"/>
      <Button handleClick={() => setBad(bad+1)} label="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
