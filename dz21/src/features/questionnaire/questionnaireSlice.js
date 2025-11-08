
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    { id: 1, text: "Ты любишь программировать?", options: ["Да", "Нет"], answer: null },
    { id: 2, text: "Тебе нравится React?", options: ["Да", "Нет"], answer: null },
  ],
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { id, answer } = action.payload;
      const question = state.questions.find((q) => q.id === id);
      if (question) question.answer = answer;
    },
    submitAnswers: (state) => {
      const positive = state.questions.filter((q) => q.answer === "Да").length;
      state.result = positive > state.questions.length / 2 ? "Ты настоящий фанат IT!" : "Попробуй ещё немного 😉";
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
