import React, { useState } from "react";
import ModalEditar from "./ModalEditar";

import BotonEditar from "./BotonEditar";

const Editar = ({ tarea, itemsTarea, setItemsTarea, setIdTarea,sumarTarea}) => {
  const [show, setShow] = useState(false);
  const [editarNueva, setEditarNueva] = useState();
  const [editarNuevaId, setEditarNuevaId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editarTarea = (id) => {
    const tareaModificada = itemsTarea.find((tarea) => tarea.id === id);
    setEditarNueva({nombre:tareaModificada.nombre,realizada:false,id:tareaModificada.id});
    setEditarNuevaId(id)
    handleShow();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id);
  };
  return (
    <>
      <button
        onClick={(e) => handleEdit(e)}
        id="botonEditarId"
        className="btn fs-5 "
      >
        <BotonEditar />
      </button>
      <ModalEditar
        id="modalEditar"
        editarNuevaId={editarNuevaId}
        setEditarNueva={setEditarNueva}
        sumarTarea={sumarTarea}
        editarNueva={
          editarNueva
        }
        itemsTarea={itemsTarea}
        setItemsTarea={setItemsTarea}
        tarea={tarea}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

export default Editar;
