import React, { useState } from "react";

const ratingList = [
  "https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png",
  "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",
  "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",
  "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png"
];

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <img
        src={ratingList[ratingValue]}
        alt="rating"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <div>
        <button onClick={() => setRatingValue(0)}>Плохо</button>
        <button onClick={() => setRatingValue(1)}>Приемлемо</button>
        <button onClick={() => setRatingValue(2)}>Хорошо</button>
        <button onClick={() => setRatingValue(3)}>Отлично</button>
      </div>
    </div>
  );
}

export default Rating;
