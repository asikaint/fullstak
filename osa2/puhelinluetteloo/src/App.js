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

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])


  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('art')

  // const filterNames = (arr, query) => {
  //   const namesArr = persons.map(person => person.name)
  //   return namesArr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  // }

  const filterNames = (arr, query) => {
    const namesArr = persons.map(person => person.name)
    return arr.filter(el => el.name.toLowerCase().includes(query))
  }

  if (newFilter.length > 0) {
    var namesToShow = [...filterNames(persons.map(person => person),newFilter)]
  } else {
    var namesToShow = [...persons]
  }

  // console.log("persons: ",persons);
  // console.log("namestoshow: ", namesToShow);

  


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
      <h1>Phonebook</h1>
      <form>
        <div> filter shown with: 
          <input value={newFilter} 
          onChange={handleFilterChange}
          />
        </div>
      </form>

      <h2>add a new number</h2>
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

      {/* {persons.map(person => <Display key={person.name} person={person}/>)}  */}
      {namesToShow.map(e => <Display key={e.name} person={e}/>)} 

    </div>
   )
}

export default App
