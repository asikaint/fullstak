import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'
import PersonsShow from './components/PersonsShow'
import personService from './services/persons'
import persons from './services/persons'


const App = () => {

  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(returnedData => {
      setPersons(returnedData)
    })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const filterNames = (arr, query) => {
    return arr.filter(el => el.name.toLowerCase().includes(query))
  }

  if (newFilter.length > 0) {
    var namesToShow = [...filterNames(persons.map(person => person),newFilter)]
  } else {
    var namesToShow = [...persons]
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
      personService
        .create(nameObject)
        .then(returnedName => {
          setPersons(persons.concat(returnedName))
          setNewName('')
          setNewNumber('')
      })
    }
  }

  const removePerson = (id) => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Remove ${person.name} `)) {    
      personService
      .remove(person.id)
        .then(removedPerson => {
        console.log("removed ",id);
        setPersons(persons.filter((person) => person.id !== id))
      })  
      .catch(error => {
        alert(
          `the note '${person.name}': '${person.number}' was already deleted from server`
        )
      })
    }
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
      <ul>
        {namesToShow.map(person => 
            <PersonsShow
            person={person} 
              removePerson={() => removePerson(person.id)}
            />
        )}
      </ul>
    </div>
   )
}

export default App
