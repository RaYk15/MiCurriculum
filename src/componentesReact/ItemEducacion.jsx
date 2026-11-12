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