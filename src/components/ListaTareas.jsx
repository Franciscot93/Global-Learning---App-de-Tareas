import React from "react";
import Editar from "./Editar";
import Borrar from "./Borrar";
import CheckBox from "./CheckBox";

const ListaTareas = ({
  itemsTarea,
  verificacionCheckBox,
  borrandoTarea,
  setItemsTarea,
  setIdTarea,
}) => {

  
  return (
    <>
      {itemsTarea.map((tarea) => (
        
        <div key={tarea.id} className="card">
          <div className="card-body text-dark row">
            {
              tarea.realizada ? (<p className="card-text text-decoration-line-through col">{tarea.nombre}</p>):(<p className="card-text col">{tarea.nombre}</p>)
            }            
            <CheckBox
              verificacionCheckBox={verificacionCheckBox}
              tarea={tarea}
            />
          </div>
          <div className="card-footer col">
            <Editar
              setIdTarea={setIdTarea}
              tarea={tarea}
              itemsTarea={itemsTarea}
              setItemsTarea={setItemsTarea}
            />
            <Borrar borrandoTarea={borrandoTarea} tarea={tarea} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListaTareas;
