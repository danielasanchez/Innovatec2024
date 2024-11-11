import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Input(props){
    return(
        <div className='App-input'>
            <InputGroup className="mb-3">
            <Form.Control
                placeholder="Agrega una tarea"
                onChange={e=>props.setTarea(e.target.value)}
                value={props.tarea}
            />
            <Button variant="outline-secondary" id="button-addon2"
                onClick={()=>props.agregar()}>
                Agregar
            </Button>
            </InputGroup>
       </div>
    )
}

export default Input;