import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Input(props){
    return(
        <div className='App-input'>
            <InputGroup className="mb-3">
            <Form.Control
                placeholder="Busca una película"
                onChange={e=>props.setPelicula(e.target.value)}
                value={props.pelicula}
            />
            </InputGroup>
       </div>
    )
}

export default Input;