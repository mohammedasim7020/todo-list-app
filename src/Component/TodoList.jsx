import React, { useState } from "react";
import { Box, TextField, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

import updateInputValue from "../Genral/genral";
import TableForList from "./TableForList";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [ifFalse, setIfFalse] = useState(false);
  const [isEdite, setIsEdite] = useState(true);

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

  const handleClose = () => {
    setIfFalse(false);
  };

  const handleUpdate = () => {
    const array = [...todos];
    array.splice(obj.ind, 1, obj);
    setTodos(array);
    setInputValue("");
    setIsEdite(true);
  };
  return (
    <>
      <section className="todo-list">
        <Box className="box">
          <h3>Enter Your Task</h3>
          {ifFalse === false ? null : (
            <Fab
              size="small"
              sx={{ bgcolor: "red" }}
              className="close-icon"
              onClick={() => handleClose()}
            >
              <CloseIcon />
            </Fab>
          )}

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
              <Fab className="arrow" size="small" onClick={handleclick}>
                <ArrowCircleLeftSharpIcon />
              </Fab>
            ) : (
              <>
                {isEdite ? (
                  <Fab
                    color="primary"
                    size="medium"
                    aria-label="add"
                    onClick={handleList}
                  >
                    <AddIcon />
                  </Fab>
                ) : (
                  <Button variant="contained" onClick={handleUpdate}>
                    Update
                  </Button>
                )}
              </>
            )}
          </div>
          <TableForList
            todos={todos}
            setTodos={setTodos}
            setInputValue={setInputValue}
            setIsEdite={setIsEdite}
          />
        </Box>
      </section>
    </>
  );
}
