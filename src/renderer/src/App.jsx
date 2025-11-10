//Iconos y estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
//Componentes
import DatosPersonales from './components/DatosPersonales';
import SaludoPersonalizado from './components/SaludoPersonalizado';


function App() {
  return (
    // El <>...</> es un Fragment, necesario para devolver un solo elemento
    <>
      <h1>Ejercicio 1</h1>
      <br />
      <DatosPersonales />

    <hr /> 

      <h1>Ejercicio 2</h1>
      {/* 2. Usamos el componente varias veces con distintas props */}
      <SaludoPersonalizado nombre="Jose" hora={10} />  {/* Debería ser "Buenos días" */}
      <SaludoPersonalizado nombre="Silvia" hora={15} />  {/* Debería ser "Buenas tardes" */}
      <SaludoPersonalizado nombre="Guillem" hora={21} />  {/* Debería ser "Buenas noches" */}
    </>
  );
}

export default App;