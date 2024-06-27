import React, { useState } from 'react'

const Search = ({onSearch}) => {
const [search, setSearch]= useState('')


const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    Search(value);
  };


  return (
    <div>
        <input type="text" placeholder='Search products...' value={search}  onChange={handleInputChange}/>
    </div>
  )
}

export default Search;