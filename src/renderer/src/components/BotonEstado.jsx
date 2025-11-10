export default function BotonEstado({ texto, habilitado, onBotonClick, colorActivo, iconClass }) {
  let btnClass;

  if (habilitado) {
    btnClass = `btn ${colorActivo}`;
  } else {
    btnClass = "btn btn-secondary";
  }

  return (
    <button className={btnClass} disabled={!habilitado} onClick={onBotonClick}>{texto} <i className={iconClass}></i></button>
  );
}
//Una vez creado el componente, hay que importarlo en App.jsx y usarlo allí.