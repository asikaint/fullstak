  
import React from 'react'


const FilterForm = ({newFilter, handleFilterChange}) => {
    return (
    <form>
        <div> Find countries:   
            <input 
            value={newFilter}
            onChange={handleFilterChange}
            />
        </div>
    </form>
    )
}

export default FilterForm