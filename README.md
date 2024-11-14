## Enlaces importantes
[React Bootstrap](https://react-bootstrap.netlify.app/)

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

## Consulta a la API

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
