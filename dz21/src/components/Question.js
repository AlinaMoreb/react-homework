
import React from "react";
import { useDispatch } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";

const Question = ({ id, text, options }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3>{text}</h3>
      {options.map((option) => (
        <button
          key={option}
          style={{ marginRight: "10px" }}
          onClick={() => dispatch(answerQuestion({ id, answer: option }))}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
