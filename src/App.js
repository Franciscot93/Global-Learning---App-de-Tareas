import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ListaTareas from "./components/ListaTareas";
import NuevaTarea from "./components/NuevaTarea";

function App() {
  
  const [itemsTarea, setItemsTarea] = useState([]);
  const sumarTarea=(nuevaTareaNombre)=>{

    if (!itemsTarea.find(tarea=>tarea.name===nuevaTareaNombre))
      setItemsTarea([...itemsTarea,{name:nuevaTareaNombre,realizada:false}])
  }
  return (
    <>
      <div className="text-center">
        <h1>Lista de Tareas</h1>
      </div>
      <Container className="bg-dark text-center text-light">
        <Col>
          <Row>
            <div>
              <NuevaTarea sumarTarea={sumarTarea}/>
              {itemsTarea.map(tarea=>(
                <div className="card">
                    <div className="card-body text-dark"><p className="card-text">{tarea.name}</p></div>
                    <div className="col"><button className="btn btn-success">Editar</button><button className="btn btn-danger">Borrar Tarea</button></div>
                </div>
              ))
              }
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default App;
