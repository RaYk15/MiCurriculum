import './App.css'
import Fondo from './componentesReact/Fondo.jsx';
import Tarjeta from './componentesReact/Tarjeta.jsx';
import Pildora from './componentesReact/Pildora.jsx'
import ItemExperiencia from './componentesReact/ItemExperiencia.jsx'
import ItemEducacion from './componentesReact/ItemEducacion.jsx'
import miFoto from './assets/foto-cabecera.jpg';

// listas que luego voy a usar para componentes
const habilidades = [
  { nombre: 'HTML', nivel: 'Intermedio' },
  { nombre: 'CSS', nivel: 'Intermedio' },
  { nombre: 'JavaScript', nivel: 'Intermedio' },
  { nombre: 'React', nivel: 'Básico' },
  { nombre: 'Java', nivel: 'Avanzado' },
  { nombre: 'SQL', nivel: 'Intermedio' },
  { nombre: 'Figma', nivel: 'Intermedio'},
  { nombre: 'Kotlin', nivel: 'Básico'}
]

const competenciasPersonales = [
  { nombre: 'Trabajo en equipo', nivel: 'Avanzado' },
  { nombre: 'Trabajo bajo presión', nivel: 'Experto' },
  { nombre: 'Gestión de proyectos', nivel: 'Intermedio' },
  { nombre: 'Atención al cliente', nivel: 'Experto' },
  { nombre: 'Creativo', nivel: 'Experto' }
  
]

const idiomas = [
  { nombre: 'Español', nivel: 'Nativo' },
  { nombre: 'Inglés', nivel: 'C1' },
  { nombre: 'Alemán', nivel: 'A2' }
]

const experiencia = [
  { puesto: 'Desarrollador de software en prácticas', empresa: 'NTT Data', periodo: "Septiembre 2026 - Actualidad", habilidades: "Desarrollo de soluciones empresariales haciendo uso de las herramientas del ecosistema de Microsoft Power Platform."},
  { puesto: 'Camarero', empresa: 'Vinos Rubio', periodo: "Enero 2026 - Septiembre 2026", habilidades: "Servicio y atención personalizada a clientela VIP, cuidando la presentación y la experiencia del cliente, y corte profesional de jamón a cuchillo."},
  { puesto: 'Camarero', empresa: 'La Tasca de Don José', periodo: "Julio 2024 - Agosto 2025", habilidades: "Atención al cliente en establecimiento de gran volumen, con trabajo en equipo, resolución de incidencias en tiempo real y adaptación rápida bajo presión." },
  { puesto: 'Camarero', empresa: 'Lorea Taberna', periodo: "Agosto 2023 - Junio 2024", habilidades: "Gestión de pedidos, inventario, proveedores y redes sociales en hostelería de pequeño formato, con atención al cliente y trabajo en equipo en entornos de alta presión."}
]

const educacion = [
  { titulo: 'Desarrollo de aplicaciones multiplataforma', centro: 'CPIFP Los Enlaces', periodo: 'Septiembre 2025 - Actualidad'},
  { titulo: 'Derecho', centro: 'Universidad Pública de Navarra', periodo: 'Septiembre 2021 - Junio 2025'},
  { titulo: 'Soldadura y mecanizado', centro: 'Fundación ELKARTE', periodo: 'Marzo 2021 - Junio 2021'},
  { titulo: 'Bachillerato artístico', centro: 'Escuela de Artes y Oficios de Pamplona', periodo: 'Septiembre 2018 - Junio 2020'}
]

function App() {
  return (
    <div className="contenedor-principal">
      <Fondo></Fondo>
      {/* header */}
      <div className="header">
        <img
          src={miFoto}
          alt="Mi foto"
          className="foto-perfil"
        />
        <div className='info'>
          <h1>Marcos Villagómez Escaño</h1>
          <h2>Desarrollador de software en formación</h2>
          <div className='contacto'>
            <p><a href="mailto:correoejemplo@gmail.com">correoejemplo@gmail.com</a></p>
            <p>|</p>
            <p>123 456 789</p>
            <p>|</p>
            <p>Zaragoza, España</p>
          </div>
        </div>
      </div>

      {/* cuerpo del currículum */}
      <div className='cuerpo'>

        {/* contenedor de la izquierda */}
        <div className='contenedorIzq'>

          {/* sobre Mí */}
          <Tarjeta titulo="Sobre Mí">
            <p>Desarrollador de software en formación, con background en hostelería y una visión práctica del mundo real. Para mí, la mejor forma de aprender a programar es resolviendo problemas concretos. Por eso, además de mi formación en DAM, me gusta dedicar tiempo a proyectos propios que nacen de necesidades reales.</p>
          </Tarjeta>

          {/* habilidades */}
          <Tarjeta titulo="Habilidades">
            <div className="lista-pildoras">
              {/* Recorrer la lista de habilidades y crear un componente Pildora por cada elemento */}
              {habilidades.map((h) => (
                <Pildora key={h.nombre} nombre={h.nombre} nivel={h.nivel} />
              ))}
            </div>
          </Tarjeta>

          {/* competencias personales */}
          <Tarjeta titulo = "Competencias personales">
            <div className='lista-pildoras'>
              {competenciasPersonales.map((c) => (
                <Pildora key={c.nombre} nombre={c.nombre} nivel={c.nivel} />
              ))}
            </div>
          </Tarjeta>

          {/* idiomas */}
          <Tarjeta titulo="Idiomas">
            <div className="lista-pildoras">
              {idiomas.map((i) => (
                <Pildora key={i.nombre} nombre={i.nombre} nivel={i.nivel} />
              ))}
            </div>
          </Tarjeta>
        </div>

        {/* contenedor de la derecha */}
        <div className='contenedorDch'>
          {/* experiencia */}
          <Tarjeta titulo="Experiencia">
            {experiencia.map((e) => (
              <ItemExperiencia key={e.empresa} puesto={e.puesto} empresa={e.empresa} periodo={e.periodo} habilidades={e.habilidades} />
            ))}
          </Tarjeta>

          {/* educación */}
          <Tarjeta titulo="Educación">
            {educacion.map((e) => (
              <ItemEducacion key={e.titulo} titulo={e.titulo} centro={e.centro} periodo={e.periodo} />
            ))}
          </Tarjeta>
        </div>
      </div>
    </div>
  );
}

export default App
