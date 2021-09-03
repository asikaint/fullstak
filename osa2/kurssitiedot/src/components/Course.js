import React from 'react'

const Course = (props) => {
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
   export default Course