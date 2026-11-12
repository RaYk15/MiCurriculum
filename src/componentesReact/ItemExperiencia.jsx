function ItemExperiencia({ puesto, empresa, periodo, habilidades }) {
  return (
    <div className="item-experiencia">
        <h3>{puesto}</h3>
        <p className="empresa">{empresa}</p>
        <p className="periodo">{periodo}</p>
        <p>{habilidades}</p>
    </div>
  );
}

export default ItemExperiencia;