import React, { useState } from 'react'

// Nappulan komponentti
const Button = ({text, handleClick}) => {
  console.log({text})
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


// Statistiikka komponentin rivikomponentti
const StatisticsLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  ) 
}


// Statistiikan näyttämisen komponentti
const Statistics = (props) => {

  const {good, neutral, bad, amount, sum} = props
   if (amount == 0)
    return (
     <div>
       <p>No feedback given</p>
     </div> 
    )
  else 
  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="amount" value={amount}/>
      <StatisticsLine text="average" value={sum/amount}/>
      <StatisticsLine text="positive" value={good/amount*100}/>
    </div>
  )
}


const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [amount, setAmount] = useState(0)
  const [sum, setSum] = useState(0)

 
  // Handlet nappuloille
  const handleGoodClick = () => {
    setGood(good+1)
    setAmount(amount+1)
    setSum(sum+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1) 
    setAmount(amount+1)
    setSum(sum+0)
  }
  const handleBadClick = () => {
    setBad(bad+1)
    setAmount(amount+1)
    setSum(sum-1)
  } 

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick}
      text="good"
      />
       <Button handleClick={handleNeutralClick}
      text="neutral"
      />
       <Button handleClick={handleBadClick}
      text="bad"
      />

      <Statistics good={good} neutral={neutral} bad={bad} amount={amount} sum={sum}/>


    </div>
  )
}

export default App