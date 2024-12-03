import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

function Countries() {
    const API_URL = "https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch(API_URL).then((res)=> res.json()).then((data) => setCountries(data)).catch((error) => console.error("Error fetching data: "+error));
    },[]);
  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        alignContent: "center",
        margin: "10px"
    }}>
        {countries.map((country) =>(
            <CountryCard name={country.name} flagUrl={country.flag} key={country.abbr} />
        ))}
        
    </div>
  )
}

export default Countries