import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function List(props){
    return(
        <div className='App-array'>
        { 
          props.arreglo.length === 0 ? <h3>No tienes pendientes</h3> :
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
              props.arreglo.map((t,posicion)=>
                <tr key={posicion}>
                  <td>{posicion+1}</td>
                  <td>{t}</td>
                  <td><Button variant="danger" onClick={()=>props.eliminar(posicion)}>-</Button></td>
              </tr>
              )
            }
            </tbody>
          </Table>
        }
      </div>
    )
}

export default List;

