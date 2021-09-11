import React from 'react'


const DisplayOneCountry = ({country,text}) => {

    // Muodestetaan array (vaihtoehtoisesti mapissa kutsuittaisiin [props.country].map)
    console.log("country ",text,"   ",country);
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
            </div>
        )
    )
}

export default DisplayOneCountry
