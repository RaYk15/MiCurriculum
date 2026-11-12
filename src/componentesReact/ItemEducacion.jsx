// componente para las entradas de la sección educación.
// Recibe el nombre del título, el nombre del centro, y el periodo de tiempo.
// Comparte classNames con ItemExperiencia por tema de unicidad en el estilo.
function ItemEducacion({ titulo, centro, periodo }) {
  return (
    <div className="item-experiencia">
        <h3>{titulo}</h3>
        <p className="empresa">{centro}</p>
        <p className="periodo">{periodo}</p>
    </div>
  );
}

export default ItemEducacion;