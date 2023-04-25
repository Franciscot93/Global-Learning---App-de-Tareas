import React from 'react'
import BotonBorrar from './BotonBorrar'

const Borrar = ({tarea,borrandoTarea}) => {
      
    
      
  return (
    <button id="botonBorrarId" onClick={(e)=>borrandoTarea(tarea.id)} className="btn fs-5 btn-danger"><BotonBorrar/></button>
  )
}

export default Borrar
