import { Button, Form } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

const FormularioTarea = () => {
  return (
    <section className="my-4">
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formTareas">
          <Form.Control type="email" placeholder="Ej: Tarea 1" />
          <Button variant="dark" className="ms-2" type="submit">Agregar</Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioTarea;
