function Pildora({ nombre, nivel }) {
  return (
    <div className="pildora-item">
      <span className="texto-nombre">{nombre}</span>
      {nivel && <span className="texto-nivel">{nivel}</span>}
    </div>
  );
}

export default Pildora;