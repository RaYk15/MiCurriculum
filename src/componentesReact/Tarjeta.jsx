// componente para las diferentes tarjetas que contienen las secciones del currículum
// recibe el título de la sección. children es el contenido anidado dentro del componente.
function Tarjeta({ titulo, children}) {
    return (
        <div className="seccion">
            <h2 className="titulo-seccion">{titulo}</h2>
            {children}
        </div>
    );
}

export default Tarjeta;