import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ListaTareas from "./components/ListaTareas";
import NuevaTarea from "./components/NuevaTarea";
import CheckBox from "./components/CheckBox";



function App() {
  const [itemsTarea, setItemsTarea] = useState([]);

  const [idTarea, setIdTarea] = useState(0);
  
  const sumarTarea = (nuevaTareaNombre) => {
    if (!itemsTarea.find((tarea) => tarea.nombre === nuevaTareaNombre)) {
      setIdTarea(idTarea + 1);
      setItemsTarea([
        ...itemsTarea,
        { nombre: nuevaTareaNombre, realizada: false, id:nuevaTareaNombre+ idTarea },
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
      <div className="text-center">
        <h1>Lista de Tareas</h1>
      </div>
      <Container className="bg-dark text-center text-light">
        <Col>
          <Row>
            <div>
              <NuevaTarea sumarTarea={sumarTarea} />
              <ListaTareas borrandoTarea={borrandoTarea} verificacionCheckBox={verificacionCheckBox} itemsTarea={itemsTarea} />
              
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default App;
