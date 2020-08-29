import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "17ch",
    }
  }
}));

function InputArea(props) {
  const classes = useStyles();
  const [inputText, setInputText] = useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function CheckKeyPress(event) {
    if (event.which === 13) {
      props.addItem(inputText);
      setInputText("");
    }
  }
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off" >
        <TextField
          id="outlined-basic"
          label="Classname"
          variant="outlined"
          onChange={handleChange}
          type="text"
          value={inputText}
          onKeyDown={CheckKeyPress}
          className="textBox"
         
        />
      </form>
    </div>
  );
}

export default InputArea;
