import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function NuevaTarea({ sumarTarea}) {
  const [nuevaTareaNombre, setNuevaTareaNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sumarTarea(nuevaTareaNombre);

    setNuevaTareaNombre("");
  };

  return (
    <>
      
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={nuevaTareaNombre}
          onChange={(e) => {
            setNuevaTareaNombre(e.target.value);
          }}
          type="text"
          placeholder="Anota tu tarea"
        ></input>
        <button onClick={(e) => {handleSubmit(e)}}>Guardar Tarea</button>
      </form>
    </>
  );
}

export default NuevaTarea;
