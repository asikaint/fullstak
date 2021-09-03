import React, { useState } from 'react'

const Display = (props) => {
  return (
    <div>
      <p>
        {props.person.name} {props.person.number}
      </p>
    </div>
  )
}

const App = () => {

  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040123123' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const addName = (event) => {
    const nameObject = {
      name: newName,
      number: newNumber
    }
    event.preventDefault()

    console.log('button click: ',event.target)   
    const names = persons.map(person => person.name)
    const numbers = persons.map(person => person.number)

    console.log(names);
    if (names.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else if (numbers.includes(newNumber)) {
      window.alert(`${newNumber} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
    setNewNumber('')

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
          <div> name:
            <input 
            value={newName}
            onChange={handleNameChange}
            />
          </div>
          <div> number:
            <input
            value={newNumber}
            onChange={handleNumberChange}
            />
          </div>


          <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>

      {persons.map(person => <Display key={person.name} person={person}/>)} 
    </div>
   )
}

export default App
