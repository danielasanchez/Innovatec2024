
import './App.css';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Input from './Components/Input';
import List from './Components/List';


function App() {
  const [arreglo,setArreglo] = useState([]);
  const [pelicula,setPelicula]=useState('');

  useEffect(() => {
    const apikey = "" //<-- Your api key

    //string interpolation
    const api_url = `http://www.omdbapi.com/?s=${pelicula}&apikey=${apikey}`

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado => {
        console.log(resultado);
        const { Search = [] } = resultado;
        setArreglo(Search)

      });
    
  }, [pelicula]);

  return (
    <div className="App">
     <Header/>
     <Input
        pelicula={pelicula}
        setPelicula={setPelicula}
     />
     <List
        arreglo={arreglo}
     />
    </div>
  );
}

export default App;

