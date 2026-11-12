function Tarjeta({ titulo, children}) {
    return (
        <div className="seccion">
            <h2 className="titulo-seccion">{titulo}</h2>
            {children}
        </div>
    );
}

export default Tarjeta;