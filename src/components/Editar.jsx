import React, { useState } from "react";
import ModalEditar from "./ModalEditar"
import {faPencil} from "@fortawesome/free-solid-svg-icons"

const Editar = ({ tarea, itemsTarea, setItemsTarea, setIdTarea }) => {
  let exportable=''
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const editarTarea = (id) => {
    const tareaModificada = itemsTarea.find((tarea) => tarea.id === id)
    exportable=tareaModificada
    console.log(exportable)
    handleShow()
  };
  
  const handleEdit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id);
  };
  return (
    <>
    <button onClick={(e) => handleEdit(e)} className="btn fs-5 btn-success">
    Editar
    </button>
    <ModalEditar exportable={exportable} itemsTarea={itemsTarea} tarea={tarea} show={show} handleClose={handleClose}/>
    </>
  );
};

export default Editar;
