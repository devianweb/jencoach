import React, { useState } from "react";
import { createUser } from "../server/users";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CreateUser.css";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    createUser(username, password).then(() => {
      navigate("/home");
    });
  };

  return (
    <div className="container">
      <div className="inputContainer">
        <h1>EMAIL</h1>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          sx={{ backgroundColor: "white", borderRadius: "4px" }}
          onChange={(e) => setUsername(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ fontFamily: "Exo 2", fontSize: "1em", marginTop: "20px" }}
          onClick={handleClick}
        >
          CREATE
        </Button>
      </div>
    </div>
  );
};

export default CreateUser;
