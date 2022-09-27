import React, { useState } from "react";
import { Box, TextField, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import updateInputValue from "../Genral/genral";
import TableForList from "./TableForList";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [ifFalse, setIfFalse] = useState(false);

  const obj = {
    title: inputValue,
    ind: "",
  };

  const handleclick = () => {
    setIfFalse(true);
  };

  const handleList = () => {
    setTodos((priv) => [...priv, obj]);
    setInputValue("");
  };
  return (
    <>
      <section className="todo-list">
        <Box className="box">
          <h3>Enter Your Task</h3>
          <div className="for-space-btn">
            {ifFalse === false ? null : (
              <TextField
                value={inputValue}
                label="Enter Your Todo Task..."
                sx={{ width: "25rem" }}
                onChange={(event) => updateInputValue(event, setInputValue)}
              />
            )}
            {ifFalse === false ? (
              <ArrowCircleLeftSharpIcon
                className="arrow"
                fontSize="large"
                onClick={handleclick}
              />
            ) : (
              <Fab color="primary" aria-label="add" onClick={handleList}>
                <AddIcon />
              </Fab>
            )}
          </div>
          <TableForList
            todos={todos}
            setTodos={setTodos}
            setInputValue={setInputValue}
          />
        </Box>
      </section>
    </>
  );
}
