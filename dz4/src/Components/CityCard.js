import React from "react";

export default function CityCard({ city }) {
  if (!city) {
    return <p>Пожалуйста, выберите город из списка.</p>;
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 10,
        padding: 20,
        maxWidth: 400,
        textAlign: "center",
        background: "#f9f9f9",
        marginTop: 20
      }}
    >
      <h2>{city.name}</h2>
      <img
        src={city.image}
        alt={city.name}
        style={{ width: "100%", borderRadius: 10 }}
      />
      <p style={{ marginTop: 10 }}>{city.description}</p>
      <h4>Интересные факты:</h4>
      <ul style={{ textAlign: "left" }}>
        {city.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
