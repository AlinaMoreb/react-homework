import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, name: "Иван Иванов", email: "ivan@example.com" },
    { id: 2, name: "Мария Петрова", email: "maria@example.com" },
    { id: 3, name: "Алексей Смирнов", email: "alex@example.com" },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  },
});

export default userSlice.reducer;

