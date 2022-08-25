import React from 'react';

const SearchBox = ({searchChange })=> {
  return (
  <div className='pa2'>
    <input 
      className='pa3 ba b--washed-blue bg-lightest-blue' 
      type='search' 
      placeholder='Search player'
      onChange={searchChange}
    />
  </div>
        );
}

export default SearchBox;