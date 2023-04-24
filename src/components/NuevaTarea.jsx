import { useState } from "react";



function NuevaTarea({ sumarTarea}) {
  const [nuevaTareaNombre, setNuevaTareaNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sumarTarea(nuevaTareaNombre);

    setNuevaTareaNombre("");
  };

  return (
    <>
      
      <form className="form fondo mb-3" onSubmit={(e) => handleSubmit(e)}>
        <input className="form-control fs-2 fondo"
          value={nuevaTareaNombre}
          onChange={(e) => {
            setNuevaTareaNombre(e.target.value);
          }}
          type="text"
          placeholder="Anota tu tarea"
        ></input>
        <button id="botonGuardado" className=" text-center mt-2 fs-3 btn rounded-pill ms-2" onClick={(e) => {handleSubmit(e)}}>Guardar Tarea</button>
      </form>
    </>
  );
}

export default NuevaTarea;
