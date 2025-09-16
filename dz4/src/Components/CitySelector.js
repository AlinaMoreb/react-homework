import React from "react";

export default function CitySelector({ cities, onSelect }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label htmlFor="city-select" style={{ marginRight: 10 }}>
        Выберите город:
      </label>
      <select
        id="city-select"
        onChange={(e) => onSelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          -- выберите город --
        </option>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
