import React, { useState } from "react";
import CitySelector from "./Components/CitySelector";
import CityCard from "./Components/CityCard";
import "./App.css";

function App() {
  const cities = [
    {
      name: "Париж",
      description: "Столица Франции, известна Эйфелевой башней и Лувром.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_as_seen_from_the_Tour_Saint-Jacques_2011_03.jpg",
      facts: [
        "Эйфелева башня была построена в 1889 году.",
        "В Лувре находится более 35 000 произведений искусства.",
        "Париж называют 'Городом света'."
      ]
    },
    {
      name: "Нью-Йорк",
      description: "Один из крупнейших городов США, центр финансов и культуры.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Lower_Manhattan_skyline_-_June_2017_img3.jpg",
      facts: [
        "В Нью-Йорке находится Статуя Свободы.",
        "Центральный парк занимает 341 гектар.",
        "В городе проживает более 8 миллионов человек.",
      ]
    },
    {
      name: "Токио",
      description: "Столица Японии, город высоких технологий и древних храмов.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/12/Tokyo_Tower_and_around_Skyscrapers.jpg",
      facts: [
        "Токио — самый населённый мегаполис в мире.",
        "Здесь находится знаменитый перекрёсток Сибуя.",
        "Императорский дворец расположен в центре города."
      ]
    }
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelect = (cityName) => {
    const city = cities.find((c) => c.name === cityName);
    setSelectedCity(city);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>City Cards</h1>
      <CitySelector cities={cities} onSelect={handleSelect} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;

