## Enlaces importantes
[Presentación](https://www.canva.com/design/DAGSnwniBTk/AxTD3fh_3VCs0Sy3Y0U7fw/edit?utm_content=DAGSnwniBTk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

[React Bootstrap](https://react-bootstrap.netlify.app/)

[Proyecto #1](https://danielasanchez.github.io/Proyecto1/)

[Proyecto #2](https://danielasanchez.github.io/Proyecto2/)

## Estilos proyecto #1
```css
.App-header {
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
.App-input {
  background-color: #ffffff;
  min-height: 10vh;
  color: rgb(0, 0, 0);
  font-size: calc(10px + 2vmin);
  margin: 10px;
}
.App-array {
  background-color: #ffffff;
  min-height: 60vh;
  color: rgb(0, 0, 0);
  font-size: calc(10px + 2vmin);
  margin: 10px;
}

```

## Estilos proyecto #2
```css
.App-header {
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
.App-input {
  background-color: #ffffff;
  min-height: 10vh;
  color: rgb(0, 0, 0);
  font-size: calc(10px + 2vmin);
  margin: 10px;
}
.App-array {
  background-color: #ffffff;
  min-height: 60vh;
  color: rgb(0, 0, 0);
  font-size: calc(10px + 2vmin);
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.App-movie{
  margin-bottom: 10px;
  width: 30vw;
}

```

## Importaciones necesarias

Para utilizar los componentes de **React-Bootstrap** en tu proyecto, es necesario importar lo siguiente:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

<Button variant="danger">Danger</Button>


 <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
</InputGroup>


<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>   
      </tbody>
</Table>



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
