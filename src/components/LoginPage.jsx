import "./LoginPage.css";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { signUser } from "../server/users";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    signUser("ian@duskwood.design", "password").then(() => {
      navigate("/home");
    });
  };

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
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        />
        <Button
          variant="contained"
          sx={{ fontFamily: "Exo 2", fontSize: "1em", marginTop: "20px" }}
          onClick={handleClick}
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
