import React from 'react'
import DisplayOneCountry from './DisplayOneCountry';

const DisplayCountries = ({countries}) => {

    const countriesLen = countries.length

    if (countriesLen > 1 && countriesLen < 11) {
        return (
            countries.map(p => 
            <div key={p.name}> 
                <p>
                    {p.name}
                   </p> 
            </div>
             )
        )
    } 
    if (countriesLen > 10) {
        return (
            <p>Too many countries to show </p>
        )
    } 
    if (countriesLen === 1) {
        return (
            <DisplayOneCountry country={countries} />
        )
    } 
    if (countriesLen === 0) {
        return (
          <p>No countries retrieved</p>
        ) 
    }
    
}


export default DisplayCountries