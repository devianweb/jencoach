import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
