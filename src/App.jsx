import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <Container className="my-4">
      <h1 className="text-center text-light display-3">Lista de Tareas</h1>
    </Container>
    <Footer></Footer>
    </>
  );
}

export default App;
