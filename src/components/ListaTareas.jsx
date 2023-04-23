import React from "react";
import Editar from "./Editar";
import Borrar from "./Borrar";
import CheckBox from "./CheckBox";

const ListaTareas = ({ itemsTarea, verificacionCheckBox,borrandoTarea}) => {

 

   return(

    <>
    
      {itemsTarea.map((tarea) => (
        <div key={tarea.id} className="card">
          <div className="card-body text-dark row">
            <p className="card-text col">{tarea.nombre}</p>
            <CheckBox
              verificacionCheckBox={verificacionCheckBox}
              tarea={tarea}
            />
          </div>
          <div className="card-footer col">
            <Editar />
            <Borrar borrandoTarea={borrandoTarea} tarea={tarea} />
          </div>
        </div>
      ))}
     
     </>
    )
    
  }

  
    

  

export default ListaTareas;
