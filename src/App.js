import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ListaTareas from "./components/ListaTareas";
import NuevaTarea from "./components/NuevaTarea";
import CheckBox from "./components/CheckBox";
import ModalEditar from "./components/ModalEditar";



function App() {
  const [itemsTarea, setItemsTarea] = useState([]);
  
  const [idTarea, setIdTarea] = useState(1);
  
  const sumarTarea = (nuevaTareaNombre) => {

    
    if (!itemsTarea.find((tarea) => tarea.nombre === nuevaTareaNombre)) {
      setIdTarea(idTarea + 1);
      setItemsTarea([
        ...itemsTarea,
        { nombre: nuevaTareaNombre, realizada: false, id:(nuevaTareaNombre+idTarea) },
      ]);
      
    }
  };


  const verificacionCheckBox = (tarea) => {
    setItemsTarea(
      itemsTarea.map((t) =>
        t.nombre === tarea.nombre ? { ...t, realizada: !t.realizada } : t
      )
      
    );
    
  };

  const borrandoTarea=(id)=>{
    setItemsTarea(itemsTarea.filter(tarea=>tarea.id !==id))
   
  }

  

  useEffect(() => {
    const tareasAlmacenadas = localStorage.getItem("tareas");

    if (tareasAlmacenadas) {
      setItemsTarea(JSON.parse(tareasAlmacenadas))
      ;
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(itemsTarea));
  }, [itemsTarea]);

  
  return (
    <>
      <div className="fondo text-center  mt-5 mb-3 text-light">
        <h1 className="fs-1 fondo ">Lista de Tareas</h1>
      </div>
      <Container className="bg-dark text-center fondo text-light">
        <Col>
          <Row>
            <div>
              <NuevaTarea sumarTarea={sumarTarea}  />
              <ListaTareas   setIdTarea={setIdTarea} sumarTarea={sumarTarea} setItemsTarea={setItemsTarea} borrandoTarea={borrandoTarea} verificacionCheckBox={verificacionCheckBox} itemsTarea={itemsTarea} />
              
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default App;
