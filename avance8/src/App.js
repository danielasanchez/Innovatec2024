
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Input from './Components/Input';
import List from './Components/List';

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
     <Header/>
      <Input
        tarea={tarea}
        setTarea={setTarea}
        agregar={agregar}
      />
      <List
        arreglo={arreglo}
        eliminar={eliminar}
      />
    </div>
  );
}

export default App;
