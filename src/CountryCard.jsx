import React from 'react';

function CountryCard({ flagUrl, name }) {
  return (
    <div
      className="countryCard"
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid grey",
        borderRadius: "10px",
        width: "180px",
        height: "180px",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img src={flagUrl} alt={name} width="150px" height="100px" />
      <h3>{name}</h3>
    </div>
  );
}

export default CountryCard;
