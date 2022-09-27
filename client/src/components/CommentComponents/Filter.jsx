import React from 'react'
import { useState } from 'react'

const Filter = ({ handleChange }) => {

    const [searchTerm, setSearchTerm] = useState("");

    const changeSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        handleChange(searchTerm)
    }

    return (

        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input
                onChange={changeSearchTerm}
                type="text"
                name="searchTerm"
                placeholder="Filter Comments"
                value={searchTerm} />
            </form>
        </div>

    )
}

export default Filter