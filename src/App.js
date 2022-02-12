import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreateUser from "./components/CreateUser";
import F_NewClient from "./components/F_NewClient";

function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="home" element={<F_NewClient />} />
        <Route path="createuser" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
