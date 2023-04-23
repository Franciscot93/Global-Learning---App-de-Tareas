import React from 'react'

const Borrar = ({tarea,borrandoTarea}) => {
      
    
      
  return (
    <button onClick={(e)=>borrandoTarea(tarea.id)} className="btn btn-danger">Borrar Tarea</button>
  )
}

export default Borrar
