import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsShow from './components/PersonsShow'
import personService from './services/persons'
import Notification from './components/Notification'



const App = () => {

  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)
console.log(`message: `, message)
console.log(`errorMessage: `, errorMessage)

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

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter));

  const addName = (event) => {
    const nameObject = {
      name: newName,
      number: newNumber
    }
    event.preventDefault()
    const names = persons.map(person => person.name.toLocaleLowerCase())
  
    if (names.includes(newName.toLowerCase())) {
      const name = names.find(name => name === newName)

      if (window.confirm(`Name ${name} is already in the phonebook, are you sure you want to change the number `)) {
        console.log("tääl")
        personService
          .put(nameObject)
          .then(returnedPerson => {
            const newPersons = persons.filter(person => person.name !== returnedPerson.name).concat(returnedPerson)
            setPersons(newPersons)
            setNewName('')
            setNewNumber('')
            console.log(`updated name ${returnedPerson.name} number to ${returnedPerson.number}`)
            setMessage(`Changed ${returnedPerson.name} number to ${returnedPerson.number}`)
            setTimeout(() => {
              setMessage(null)
            }, 3000)
        })
        .catch(error => { // Lyhyt nimi
          setErrorMessage(``)
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
        })
      }
    } else { // Ei ole lisätty
      personService
        .create(nameObject)
        .then(returnedName => {
          setPersons(persons.concat(returnedName))
          setNewName('')
          setNewNumber('')
          setMessage(`Added ${returnedName.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 3000)
      })
      .catch(error => { // Lyhyt nimi
        console.log(error.response.data.message)

        setErrorMessage(`${error.response.data.message}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
      })
    }
  }

  const removePerson = (id) => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Remove ${person.name} `)) {    
      personService
      .remove(person.id)
        .then(removedPerson => {
          setMessage(`Removed ${person.name}`)
          setTimeout(()=> {
            setMessage(null)
          }, 3000)
          setPersons(persons.filter((person) => person.id !== id))
        })  
      .catch(error => {
        setErrorMessage(`the note '${person.name}': '${person.number}' was already deleted from server`)
        setTimeout(()=> {
          setErrorMessage(null)
        }, 3000)
      })
    }
  }
  
  return (
    <div>
      <Notification message={message} messageClass={`person`}/>
      <Notification message={errorMessage} messageClass={`error`}/>

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
            key={person.id}
            person={person} 
              removePerson={() => removePerson(person.id)}
            />
        )}
      </ul>
    </div>
   )
}

export default App
