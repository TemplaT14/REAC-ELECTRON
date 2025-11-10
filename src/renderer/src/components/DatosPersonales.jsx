
export default function DatosPersonales() {
  // DATOS
  const nombre = "Jose Enrique Marti";
  const edad = 40; 
  const ciudad = "Valencia";

  return (
    <div>
      <h3>Datos Personales</h3>
      <br />
      <p>
        <strong>Nombre:</strong> {nombre}
      </p>
      <p>
        <strong>Edad:</strong> {edad}
      </p>
      <p>
        <strong>Ciudad:</strong> {ciudad}
      </p>
    </div>
  );
}

//Una vez creado el componente, hay que importarlo en App.jsx y usarlo allí.