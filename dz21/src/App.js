
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Question from "./components/Question";
import Result from "./components/Result";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";

function App() {
  const questions = useSelector((state) => state.questionnaire.questions);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>📝 Анкета</h1>
      {questions.map((q) => (
        <Question key={q.id} {...q} />
      ))}
      <button
        onClick={() => dispatch(submitAnswers())}
        style={{ marginTop: "1rem", padding: "10px 20px", fontSize: "16px" }}
      >
        Отправить
      </button>
      <Result />
    </div>
  );
}

export default App;

