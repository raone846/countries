import React from 'react';

function CountryCard({ flagUrl, name }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid grey",
        borderRadius: "10px",
        width: "250px",
        height: "250px",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img src={flagUrl} alt={name} width="150px" height="100px" />
      <h2>{name}</h2>
    </div>
  );
}

export default CountryCard;
