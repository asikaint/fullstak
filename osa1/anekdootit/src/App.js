import React, { useState } from 'react'



// Nappulan komponentti
const Button = ({text, handleClick}) => {
  return (
    <button  onClick={handleClick}>
    {text}
  </button>
  )
}

//
const TotalPoints = ({points}) => {
  return (
    <div>
      <p>
        {points}
      </p>
    </div>
  ) 
}

const DailyAnecdote = ({anecdotes, points}) => {
  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      <p>{anecdotes}</p>
      <TotalPoints points = {points} />
    </div>
  )
  
}

const MostLikedAnecdote = ({anecdotes, points}) => {
return (
    <div>
      <h1>
        Anecdote with most votes
      </h1>
      <p>{anecdotes}</p> 
      <TotalPoints points = {points} />
  </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  const [maxPoints, setMaxPoints] = useState(0);


  // Button handlerit
  const handleNextAnecdote = () => {
      setSelected(Math.floor((Math.random() * 6) + 1))
  }
  const handleVoteAnecdote = () => {
    const arr =[ ...points ]
    arr[selected] += 1   
    setPoints(arr)
    setMaxPoints(arr.indexOf(Math.max(...arr)))  
  }

  return (
    <div>
      <DailyAnecdote anecdotes={anecdotes[selected]} points={points[selected]} />
      <Button text="vote" handleClick={handleVoteAnecdote} />
      <Button text="next anecdote" handleClick={handleNextAnecdote} />
      <MostLikedAnecdote anecdotes={anecdotes[maxPoints]} points={points[maxPoints]} />
    </div>
  )
}

export default App
