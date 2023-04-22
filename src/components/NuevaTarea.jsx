import React from "react";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



function NuevaTarea() {
    return (
      <>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

      </>
    );
  }


export default NuevaTarea;
  