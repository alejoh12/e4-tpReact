import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ lista }) => {
  return (
    <ListGroup>
      {lista.map((item, indice) => (
        <ItemTarea key={indice} tarea={item}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
