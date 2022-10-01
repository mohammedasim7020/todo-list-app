import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";


const TableForList = ({ todos, setTodos, setInputValue,setIsEdite }) => {
  const handleDelete = (index) => {
    const array = [...todos];
    array.splice(index, 1);
    setTodos(array);
  };

  const handleEdit = (item, index) => {
    setInputValue(item.title);
    setIsEdite(false)
  };

  return (
    <>
      {todos.map((item, index) => {
        return (
          <>
            <div className="list-container" key={index}>
              <h2>{item.title}</h2>
              <div className="button-section">
                <IconButton>
                  <EditIcon onClick={() => handleEdit(item, index)} sx={{color:"black"}}/>
                </IconButton>
                <IconButton>
                  <DeleteIcon onClick={() => handleDelete(index)} sx={{color:"red"}}/>
                </IconButton>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TableForList;
