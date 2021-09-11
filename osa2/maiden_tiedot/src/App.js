import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from './components/FilterForm'
import DisplayCountries from './components/DisplayCountries'

function App() {
  const [ newFilter, setNewFilter] = useState('')
  const [newCountries, setNewCountries] = useState([])
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response=> {
      console.log('Promise fullfill')
      setNewCountries(response.data)
    })
  }, [])
  
    // Filteröinti
  const filterArr = (arr, query) => {
    return arr.filter(el => el.name.toLowerCase().includes(query))
  }
  var countriesToShow = []
  if (newFilter.length > 0) {
      countriesToShow = [...filterArr(newCountries.map(country => country),newFilter)]
  } else {
      countriesToShow = [...newCountries]
      console.log('countriesToShow', countriesToShow);

  }
 

  return (
    <div >
      <FilterForm newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <DisplayCountries countries={countriesToShow} /> 
    </div>

  )
}

export default App;
