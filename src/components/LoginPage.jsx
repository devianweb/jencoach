import "./LoginPage.css";
import React from "react";
import { TextField, Button } from "@mui/material";
import { signUser } from "../server/users";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    signUser("ian@duskwood.design", "password").then(() => {
      navigate("/home");
    });
  };

  return (
    <div className="loginContainer">
      <div className="inputContainer">
        <h1>EMAIL</h1>
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
