import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
