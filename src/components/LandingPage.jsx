import "./LandingPage.css";
import React from "react";
import bigLogo from "../resources/jc-big-logo.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="titleContainer">
      <img src={bigLogo} alt="logo" />
      <h1>WELCOME</h1>
      <Button
        variant="contained"
        sx={{ fontFamily: "Exo 2", fontSize: "1em" }}
        onClick={handleClick}
      >
        LOGIN
      </Button>
    </div>
  );
};

export default LandingPage;
