export default function BotonEstado({ texto, activo }) {
  //variables
  let btnClass;
  let iconClass;

    //Logica principal
  if (activo) {
    btnClass = "btn btn-success";
    iconClass = "bi bi-check-lg";
  } else {
    btnClass = "btn btn-secondary";
    iconClass = "bi bi-x-lg";
  }

  return (
    <button className={btnClass} disabled={!activo}>
      {texto} <i className={iconClass}></i>
    </button>
  );
}

//Una vez creado el componente, hay que importarlo en App.jsx y usarlo allí.