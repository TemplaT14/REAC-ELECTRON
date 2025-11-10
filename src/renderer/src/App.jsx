//Iconos y estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
//Componentes
import DatosPersonales from './components/DatosPersonales'
import SaludoPersonalizado from './components/SaludoPersonalizado'
import BotonEstado from './components/BotonEstado'

function App() {
  return (
    // El <>...</> es un Fragment, necesario para devolver un solo elemento
    <>
      <h1>Ejercicio 1</h1>
      <br />
      <DatosPersonales />
      <hr />
      <h1>Ejercicio 2</h1>
      <SaludoPersonalizado nombre="Jose" hora={10} /> 
      <SaludoPersonalizado nombre="Silvia" hora={15} /> 
      <SaludoPersonalizado nombre="Guillem" hora={21} />
      <hr />
      <h1>Ejercicio 3</h1>
      <div className="d-flex gap-2">
        <BotonEstado texto="Conectado" activo={true} />
        <BotonEstado texto="Desconectado" activo={false} />
      </div>
    </>
  )
}

export default App
