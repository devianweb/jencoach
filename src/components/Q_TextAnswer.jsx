import React from "react";
import { TextField } from "@mui/material";

const Q_TextAnswer = (question) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>{question}</h1>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        multiline
        minRows={4}
        sx={{ backgroundColor: "white", borderRadius: "4px" }}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontFamily: "Exo 2",
    color: "white",
  },
};

export default Q_TextAnswer;
