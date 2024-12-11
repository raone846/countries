import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => onSearch(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid grey',
          width: '80%',
          maxWidth: '400px',
        }}
      />
    </div>
  );
}

export default SearchBar;
