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
        <div id="tarjetaTarea"className="card-body mt-3 rounded" >
        <div key={tarea.id} className=" mt-3">
          <div className="card-body d-flex justify-content-around text-light col">
            <div >
            {
              tarea.realizada ? (<p className="card-text fs-4 text-decoration-line-through col">{tarea.nombre}</p>):(<p className="card-text fs-4 col">{tarea.nombre}</p>)
            }</div>   <div> 
            <CheckBox
              verificacionCheckBox={verificacionCheckBox}
              tarea={tarea}
            />
            </div> 
          </div>
          <div className="card-body mt-4 fondo col">
            <Editar
              setIdTarea={setIdTarea}
              tarea={tarea}
              itemsTarea={itemsTarea}
              setItemsTarea={setItemsTarea}
            />
            <Borrar borrandoTarea={borrandoTarea} tarea={tarea} />
          </div>
        </div>
        </div>
      ))}
    </>
  );
};

export default ListaTareas;
