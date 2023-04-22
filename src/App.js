import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
/*import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';*/

import { useState } from 'react';
import ListaTareas from './components/ListaTareas';

function App() {

  const [tareas,setTareas]=useState(20)
  return (
    <>
      <Container  className='bg-dark altura align-items-center' >

        <ListaTareas tareas ></ListaTareas>    

      </Container>
    </>
  );
}

export default App;
