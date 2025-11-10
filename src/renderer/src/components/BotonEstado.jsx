// src/renderer/src/components/BotonEstado.jsx

// eslint-disable-next-line react/prop-types
export default function BotonEstado({ texto, habilitado, onBotonClick, colorActivo, iconClass }) {
  let btnClass;

  if (habilitado) {
    btnClass = `btn ${colorActivo}`;
  } else {
    btnClass = "btn btn-secondary";
  }

  return (
    <button
      className={btnClass}
      disabled={!habilitado}
      onClick={onBotonClick}
    >
      {/* Añadimos el icono junto al texto */}
      {texto} <i className={iconClass}></i>
    </button>
  );
}