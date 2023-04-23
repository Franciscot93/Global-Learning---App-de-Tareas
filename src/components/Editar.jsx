import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Editar = ({ tarea, itemsTarea, setItemsTarea, setIdTarea }) => {
  const editarTarea = (id) => {
    const tareaModificada = itemsTarea.find((tarea) => tarea.id === id);
    
    
  };
  const handleEdit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id);
  };
  return (
    <button onClick={(e) => handleEdit(e)} className="btn btn-success">
      Editar
    </button>
  );
};

export default Editar;
