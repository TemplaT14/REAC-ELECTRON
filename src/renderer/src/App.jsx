// src/renderer/src/App.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

// src/renderer/src/App.jsx

// ... (imports de bootstrap, react, y componentes...)
import { useState } from 'react';
import DatosPersonales from './components/DatosPersonales';
import SaludoPersonalizado from './components/SaludoPersonalizado';
import BotonEstado from './components/BotonEstado';

function App() {
  const [isConectado, setIsConectado] = useState(false);

  const handleConectar = () => {
    setIsConectado(true);
  };

  const handleDesconectar = () => {
    setIsConectado(false);
  };

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
        {/* === BOTÓN CONECTAR === */}
        <BotonEstado
          texto="Conectar"
          habilitado={!isConectado}
          onBotonClick={handleConectar}
          colorActivo="btn-success"
          iconClass="bi bi-check-lg" // <-- AÑADIMOS EL ICONO V
        />

        {/* === BOTÓN DESCONECTAR === */}
        <BotonEstado
          texto="Desconectar"
          habilitado={isConectado}
          onBotonClick={handleDesconectar}
          colorActivo="btn-danger"
          iconClass="bi bi-x-lg" // <-- AÑADIMOS EL ICONO X
        />
      </div>
    </div>
  );
}

export default App;