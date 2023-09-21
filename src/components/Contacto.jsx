import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registro() {
  return (
    <div className='cont-form'>
      <Form>

      <Form.Group className="mb-3">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="nombre@example.com" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" />
      </Form.Group>

      <Button variant="danger" type="submit">
        Enviar
      </Button>

    </Form>
    </div>
    
  );
}

export default Registro;