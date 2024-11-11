import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

function App() {
  const [arreglo,setArreglo] = useState([]);
  const [tarea,setTarea]=useState('');

  const agregar=()=>{
    setArreglo([...arreglo,tarea]);
    setTarea('');
  }

  const eliminar=(posicion)=>{
    const nuevo_arreglo = arreglo.filter((tarea,indice)=> indice!==posicion);
    setArreglo(nuevo_arreglo);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Mis pendientes </p>
      </header>
      <div className='App-input'>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Agrega una tarea"
            onChange={e=>setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="outline-secondary" id="button-addon2"
            onClick={()=>agregar()}>
            Agregar
          </Button>
        </InputGroup>
      </div>
      <div className='App-array'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Actividad</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
          {
            arreglo.map((t,posicion)=>
              <tr key={posicion}>
                <td>{posicion}</td>
                <td>{t}</td>
                <td><Button variant="danger" onClick={()=>eliminar(posicion)}>-</Button></td>
            </tr>
            )
          }
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
