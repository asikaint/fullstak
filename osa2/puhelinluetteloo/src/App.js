import React, { useState } from 'react'

const Display = (props) => {
  return (
    <div>
      <p>
        {props.person.name}
      </p>
    </div>
  )
}

const App = () => {

  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log('button click: ',event.target)    
    const nameObject = {
      name: newName,
    }

    const names = persons.map(person => person.name)

    console.log(names);
    if (names.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
          <input 
          value={newName}
          onChange={handleNameChange}
          />
          <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>

      {persons.map(person => <Display key={person.name} person={person}/>)} 
    </div>
   )
}

export default App
