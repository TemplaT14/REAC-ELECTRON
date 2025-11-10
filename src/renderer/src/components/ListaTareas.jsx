export default function ListaTareas({ tareas }) {
  return (
    <div>
      <h3>Lista de Tareas</h3>
      <ul>
        {/* Usamos .map() para transformar cada string del array en un <li>.
          .map() nos da dos cosas: el ítem (tarea) y su posición (index).
        */}
        {tareas.map((tarea, index) => (
          // React necesita una 'key' única para cada ítem de la lista.
          // Usar el 'index' es válido para listas simples que no cambian.
          <li key={index}>
            {index + 1}. {tarea} {/* Mostramos el número (index + 1) y la tarea */}
          </li>
        ))}
      </ul>
    </div>
  );
}

//Una vez creado el componente, hay que importarlo en App.jsx y usarlo allí.