import React from 'react';
import './style.css';

function SearchForm({city, setCity, onSearch}){
  const handleEnter = (event)=>{
    if(event.key === 'Enter'){ //in enter E has to be capitalized
      onSearch();
    }
  }
  return(
    <div className='search-container'>
      <input
        type='text'
        placeholder='Enter city Name'
        value = {city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  )
}

export default SearchForm;