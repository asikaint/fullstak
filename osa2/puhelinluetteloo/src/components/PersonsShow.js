import React from 'react'

const PersonsShow = ({person, removePerson}) => {
    return (
    <li>
        {person.name}: {person.number} {" "}
        <button onClick={removePerson}>
            remove 
        </button>
    </li>    
    )
}

    
         
export default PersonsShow