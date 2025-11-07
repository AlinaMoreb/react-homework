import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;

