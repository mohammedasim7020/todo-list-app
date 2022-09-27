import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
// import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const TableForList = ({ todos, setTodos, setInputValue }) => {
  const handleDelete = (index) => {
    const array = [...todos];
    array.splice(index, 1);
    setTodos(array);
  };

  const handleEdit = (item, index) => {
    setInputValue({ ...item, ind: index });
  };
  return (
    <>
      {todos.map((item, index) => {
        return (
          <>
            <div className="list-container">
              <h2>{item.title}</h2>
              <div className="button-section">
                <EditIcon onClick={() => handleEdit(item, index)} />
                <DeleteIcon onClick={() => handleDelete(index)} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TableForList;
