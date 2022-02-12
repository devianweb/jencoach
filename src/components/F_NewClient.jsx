import React, { useState } from "react";
import Q_TextAnswer from "./Q_TextAnswer";
import { Button } from "@mui/material";
import "./F_NewClient.css";

const F_NewClient = () => {
  const questions = [
    Q_TextAnswer("Name?"),
    Q_TextAnswer("Age?"),
    Q_TextAnswer("Relevant Sports Clubs?"),
    Q_TextAnswer("Strava Profile Link? (optional)"),
  ];

  const [qNum, setQNum] = useState(0);

  const handleNext = () => {
    if (qNum !== questions.length - 1) {
      setQNum((curr) => {
        return curr + 1;
      });
    }
  };

  const handleSubmit = () => {};

  return (
    <div style={styles.container} className="formContainer">
      {questions[qNum]}
      {qNum !== questions.length - 1 ? (
        <Button
          variant="contained"
          sx={{ fontFamily: "Exo 2", fontSize: "1em", marginTop: "20px" }}
          onClick={handleNext}
        >
          NEXT
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ fontFamily: "Exo 2", fontSize: "1em", marginTop: "20px" }}
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "40px",
    borderRadius: "10px",
    margin: "20px",
  },
};

export default F_NewClient;
