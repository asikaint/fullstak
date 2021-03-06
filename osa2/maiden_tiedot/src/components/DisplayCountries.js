import React, { useState } from 'react'
import DisplayOneCountry from './DisplayOneCountry';

const DisplayCountries = ({countries}) => {
    const [showOneCountry,setShowOneCountry] = useState(false) // To display one country
    const [oneCountry, setOneCountry] = useState([])
    const countriesLen = countries.length

      // Ns. vakiomuotoillut vastaukset
    if (countriesLen > 10) {
        return (
            <p>Too many countries to show </p>
        )
    } 
    if (countriesLen === 0) {
        return (
        <p>No countries retrieved</p>
        ) 
    }

        if (countriesLen > 1 && countriesLen < 11) {
        return (
            <div>
            {!showOneCountry &&
                countries.map(p => 
                    <p key={p.name}>
                        {p.name}
                        <button onClick={() =>
                            {setShowOneCountry(!showOneCountry)
                            setOneCountry(p)}
                        }>
                        show
                        </button>
                    </p> 
                )
            }
            {showOneCountry &&
                    <div>
                        <DisplayOneCountry country={[oneCountry]}/>
                        <button onClick = { () => 
                            {setShowOneCountry(!showOneCountry)
                            setOneCountry([])}
                        }>
                        hide
                        </button>
                    </div>
            }
            </div>
        )
    } 
    if (countriesLen === 1) {
        return (
            <DisplayOneCountry country={[countries[0]]}/>
        )
    } 

    
}


export default DisplayCountries