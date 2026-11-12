// componente para las píldoras de habilidades, competencias e idiomas.
// Recibe el nombre de la habilidad y el nivel de experiencia.
function Pildora({ nombre, nivel }) {
  return (
    <div className="pildora-item">
      <span className="texto-nombre">{nombre}</span>
      {nivel && <span className="texto-nivel">{nivel}</span>}
    </div>
  );
}

export default Pildora;