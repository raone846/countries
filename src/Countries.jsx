import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';

function Countries() {
  const API_URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const uniqueCountries = data.filter(
          (country, index, self) =>
            self.findIndex((c) => c.cca3 === country.cca3) === index
        );
        const mappedCountries = uniqueCountries.map((country) => ({
          name: country.name.common,
          flag: country.flags.svg || country.flags.png,
          abbr: country.cca3,
        }));
        setCountries(mappedCountries);
        setFilteredCountries(mappedCountries); // Initialize filtered countries
      })
      .catch((error) => console.error("Error fetching data: " + error));
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          alignContent: "center",
          margin: "10px",
        }}
      >
        {filteredCountries.map((country) => (
          <CountryCard
            name={country.name}
            flagUrl={country.flag}
            key={country.abbr}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;
