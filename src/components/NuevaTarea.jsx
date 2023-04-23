import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function NuevaTarea(props) {
  const [nuevaTareaNombre, setNuevaTareaNombre] = useState('');
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.sumarTarea(nuevaTareaNombre)
    
    setNuevaTareaNombre("");
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={nuevaTareaNombre}
          onChange={(e) => {
            setNuevaTareaNombre(e.target.value);
          }}
          type="text"
          placeholder="Anota tu tarea"
        ></input>
        <button
          onClick={() => {
           
          }}
        >
          Guardar Tarea
        </button>
      </form>
    </>
  );
}

export default NuevaTarea;
