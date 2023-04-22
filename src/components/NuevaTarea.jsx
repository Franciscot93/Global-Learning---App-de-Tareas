import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function NuevaTarea(props) {
  const [nuevaTareaNombre, setNuevaTareaNombre] = useState('');
  console.log(props)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.sumarTarea(nuevaTareaNombre)
    localStorage.setItem("tarea", nuevaTareaNombre);
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
            alert(nuevaTareaNombre);
          }}
        >
          Guardar Tarea
        </button>
      </form>
    </>
  );
}

export default NuevaTarea;
