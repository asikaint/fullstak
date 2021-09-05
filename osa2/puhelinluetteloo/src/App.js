import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])


  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')


  const filterNames = (arr, query) => {
    return arr.filter(el => el.name.toLowerCase().includes(query))
  }

  if (newFilter.length > 0) {
    var namesToShow = [...filterNames(persons.map(person => person),newFilter)]
  } else {
    var namesToShow = [...persons]
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const addName = (event) => {
    const nameObject = {
      name: newName,
      number: newNumber
    }
    event.preventDefault()

    const names = persons.map(person => person.name.toLocaleLowerCase())
    const numbers = persons.map(person => person.number)

    if (names.includes(newName.toLowerCase())) {
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
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <h3>add a new number</h3>
      <PersonForm 
        addName={addName} 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons namesToShow={namesToShow} />
    </div>
   )
}

export default App
