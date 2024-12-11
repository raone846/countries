import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Trigger the search logic
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a country..."
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}

export default SearchBar;
