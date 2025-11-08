import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);
  if (!result) return null;

  return (
    <div style={{ marginTop: "2rem", fontSize: "18px", fontWeight: "bold" }}>
      🏆 Результат: {result}
    </div>
  );
};

export default Result;
