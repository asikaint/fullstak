import React from 'react'

const Persons = ({namesToShow}) => 
    namesToShow.map(p => <p key={p.name}> {p.name}: {p.number} </p> )


export default Persons