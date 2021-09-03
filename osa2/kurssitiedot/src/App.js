// import './App.css';
import React, { useState } from 'react'


const Course = (props) => {
   console.log("props ",props)
  const {course} = props
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}
const Header = (props) => {
  return (
    // <div>
      <h1>
        {props.course.name} 
      </h1>
    // </div>
  )
}
const Content = ({course}) => {
  // console.log(props)
  return (
      <div>
          <Part course={course} /> 
      </div>
  )
}
const Part = (props) => {
  const parts  = props.course.parts
  return (
     <div>
        {parts.map(part => <p key={part.id}>
          {part.name} {part.exercises}
        </p>)}
     </div>    
  )
}
const Total = (props) => {
  const parts  = props.course.parts
  // Mapataan exercises osio omaan array ja reducella lasketaan summa
  const exercises = parts.map(part=>part.exercises)
  const total = exercises.reduce ( (total,exercise) => total = total + exercise, 0)

  return (
    <div>
      <p>
        <b>
          Number of exercises  {total}
        </b>
      </p>
    </div>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  // Mapilla syötetään courseista jokainen erikseen kuten aiemmin 
  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course}/>) }
    </div>
  )
}
export default App
