export default function SaludoPersonalizado(props) {
  // Obtenemos las props que nos pasan
  const { nombre, hora } = props;

  let saludo;

  // Lógica principal
  if (hora < 12) {
    saludo = "Buenos días"; 
  } else if (hora >= 12 && hora <= 18) {
    saludo = "Buenas tardes"; 
  } else {
    saludo = "Buenas noches"; 
  }

  return (
    <p>
      {saludo}, <strong>{nombre}</strong>.
    </p>
  );
}

//Una vez creado el componente, hay que importarlo en App.jsx y usarlo allí.