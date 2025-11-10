//Iconos y estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
//Componentes
import DatosPersonales from './components/DatosPersonales';


function App() {
  return (
    // El <>...</> es un Fragment, necesario para devolver un solo elemento
    <>
      <h1>Ejercicio 1</h1>
      <br />
      <DatosPersonales />
    </>
  );
}

export default App;

