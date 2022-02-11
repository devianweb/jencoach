import "./LoginPage.css";
import React from "react";
import bigLogo from "../resources/jc-big-logo.png";
import TextField from "@mui/material/TextField";

const LoginPage = () => {
  return (
    <div className="loginContainer">
      <div className="inputContainer">
        <h1>USERNAME</h1>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          sx={{ backgroundColor: "white", borderRadius: "4px" }}
        />
        <h1>PASSWORD</h1>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          type="password"
          sx={{ backgroundColor: "white", borderRadius: "4px" }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
