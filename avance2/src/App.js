import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  const [arreglo,setArreglo] = useState([]);
  const [tarea,setTarea]=useState('');
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
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </div>
      <div className='App-array'>
        {
          arreglo.map(t=>
            <p>{t}</p>
          )
        }
      </div>
    </div>
  );
}

export default App;
