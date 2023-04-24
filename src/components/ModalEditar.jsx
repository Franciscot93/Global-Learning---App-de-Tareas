import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalEditar=({show,handleClose,exportable,tarea})=> {
  const [nuevaTareaNombre, setNuevaTareaNombre] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    setNuevaTareaNombre("");
  };
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body><form onSubmit={(e) => handleSubmit(e)}>
        <input className='text-dark'
          value={nuevaTareaNombre}
          onChange={(e) => {
            setNuevaTareaNombre(exportable.nombre);
          }}
          type="text"
          
        ></input>
        
      </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button onClick={(e) => {handleSubmit(e)}} variant="primary">
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditar