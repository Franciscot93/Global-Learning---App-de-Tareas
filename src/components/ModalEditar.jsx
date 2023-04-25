import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BotonGuardarModal from './BotonGuardarModal';
import BotonCerrarModal from './BotonCerrarModal';


const ModalEditar=({show,handleClose,editarNueva,setEditarNueva,itemsTarea,setItemsTarea,editarNuevaId})=> {
  
  const mandado=()=>{
    /*const datosNuevos=itemsTarea.find(tarea=>tarea.id===id)
    setItemsTarea({nombre:nombre,realizada:false,id:id})
    console.log(nombre)*/
  }
  
  const handleEdit = (e) => {
    e.preventDefault();
    
    console.log(editarNueva)
    console.log(editarNuevaId)
    const datosNuevos=itemsTarea.find(tarea=>tarea.id===editarNuevaId)
    console.log(datosNuevos)
    
    handleClose()
  };
  
  return (
    <>
      <Modal id="modalEditar" className='rounded' show={show} onHide={handleClose}>
        <Modal.Body className='text-light ' >
          <Modal.Body className='text-center text-decoration-underline text-light fs-2'>Editar Tarea</Modal.Body>
        </Modal.Body>
        <Modal.Body><form onSubmit={(e) => handleEdit(e)}>
        <input id="inputModal" className=' form-control fs-2 text-dark'
          
          onChange={(e) => {
            setEditarNueva(e.target.value);
          }}
          type="text"
          
        ></input>
        
      </form></Modal.Body>
        <Modal.Body className=' d-flex justify-content-around'>
          <Button id="botonCerrarModal" className='btn' type="button" variant="secondary" onClick={handleClose}>
           <BotonCerrarModal id="botonCerrarModal"/>
          </Button>
          <Button id="botonGuardarModal" className='btn' type="button" onClick={(e) => {handleEdit(e)}} variant="primary">
          <BotonGuardarModal />
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalEditar