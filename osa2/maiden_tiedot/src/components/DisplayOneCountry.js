import React, { useState, useEffect } from 'react'
import axios from 'axios'

// console.log("api_key ",api_key); // c79a378b8d22cb8e1979b30d06e06395

const DisplayOneCountry = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const capital = country[0].capital; 
    const [capitalWeather,setCapitalWeather] = useState([])
    const url = 'http://api.weatherstack.com/current?access_key='+ api_key +'&query='+ capital

    useEffect(() => {
        console.log('effect')
        const eventHandler = response => {
          console.log('promise fulfilled, weatherdata')
          setCapitalWeather(response.data)
        }
        const promise = axios.get(url)
        promise.then(eventHandler)
    }, [])

    if (capitalWeather.length === 0) {
        return  <div><p>Loading data...</p></div>
    }
    else {
        console.log(capitalWeather);
        return (
            country.map(c =>
                <div key={c.name}> 
                    <h1> {c.name} </h1>
                    <ul>
                        <li>Capital: {c.capital}</li>
                        <li>Population: {c.population}</li>
                    </ul>
                    <h2>languages</h2>
                    <ul>
                        {c.languages.map(lang =>
                            <li key={lang.iso639_1}>
                                {lang.name}
                            </li>
                        )}
                    </ul>        
                    <img src={c.flag} alt="Country flag"  width="180" height="110"/>
                    <h2>Weather in {c.capital}</h2>
                    <p><b>temperature:</b> {capitalWeather.current.temperature}</p>
                    <img src={capitalWeather.current.weather_icons[0]} alt="Weather icon" width="100" height="100"/> 
                    <p><b>wind: </b>{capitalWeather.current.wind_speed} mph direction {capitalWeather.current.wind_dir} </p>
                </div>
            )
        )
    }

}

export default DisplayOneCountry
