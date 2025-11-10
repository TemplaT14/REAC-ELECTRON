
// Importamos los estilos de Bootstrap y Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

//Componentes de React
import { useState } from 'react';
import DatosPersonales from './components/DatosPersonales';
import SaludoPersonalizado from './components/SaludoPersonalizado';
import BotonEstado from './components/BotonEstado';
import ListaTareas from './components/ListaTareas';

function App() {
  const [isConectado, setIsConectado] = useState(false);
  //funciones handleConectar y handleDesconectar
  const handleConectar = () => setIsConectado(true);
  const handleDesconectar = () => setIsConectado(false);

  // array de tareas para el componente ListaTareas
  const misTareas = ["Preparar clase", "Hacer test", "Programar"];

  return (
    <div className="p-3">
   
      <h1>Ejercicio 1</h1>
      <DatosPersonales />

      <hr />

      <h1>Ejercicio 2</h1>
      <SaludoPersonalizado nombre="Jose" hora={10} />
      <SaludoPersonalizado nombre="Silvia" hora={15} />
      <SaludoPersonalizado nombre="Guillem" hora={21} />

      <hr />

      <h1>Ejercicio 3</h1>
      <div className="d-flex gap-2">
        <BotonEstado
          texto="Conectar"
          habilitado={!isConectado}
          onBotonClick={handleConectar}
          colorActivo="btn-success"
          iconClass="bi bi-check-lg"
        />
        <BotonEstado
          texto="Desconectar"
          habilitado={isConectado}
          onBotonClick={handleDesconectar}
          colorActivo="btn-danger"
          iconClass="bi bi-x-lg"
        />
      </div>

      <hr />

      <h1>Ejercicio 4</h1>
      <ListaTareas tareas={misTareas} />
    </div>
  );
}

export default App;