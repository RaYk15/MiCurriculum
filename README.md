# Currículum Vitae en React

Currículum personal hecho con **React** y **Vite** como proyecto de desarrollo de interfaces.

El currículum se muestra como una tarjeta semitransparente sobre un fondo animado de ballenas nadando entre nubes, con una paleta en tonos azul cielo.

## Características

- **Componentes reutilizables** para cada parte del currículum (tarjetas de sección, píldoras, experiencia y educación).
- **Datos separados del diseño:** habilidades, idiomas, experiencia y educación se guardan en listas y se generan con `.map()`, así que añadir un elemento nuevo es añadir una línea.
- **Píldoras interactivas:** al pasar el ratón por encima cambian de color y muestran el nivel en lugar del nombre.
- **Fondo animado en bucle** hecho solo con CSS (`@keyframes`), sin librerías externas.
- **Efectos hover** en las tarjetas y en los elementos de experiencia.

## Tecnologías

- React
- Vite
- CSS (Flexbox, Grid, transiciones y animaciones)
- ESLint
- Google Fonts (PT Serif, Redaction)

## ¿Por qué Vite?
 
Vite es la herramienta que crea el proyecto, lo ejecuta mientras se desarrolla y lo prepara para publicarlo. Se ha elegido por estos motivos:
 
- **Arranque casi instantáneo.** El servidor de desarrollo se inicia en menos de un segundo, porque no procesa todo el proyecto de golpe: solo prepara los archivos que el navegador va pidiendo.
- **Cambios en tiempo real.** Al guardar un archivo, la página se actualiza al momento y sin recargarse entera, así que se ve el resultado de cada cambio en CSS o JSX sin perder el estado de la página.
- **Gestiona las imágenes y los estilos.** Permite importar imágenes y CSS directamente desde JavaScript (`import miFoto from './assets/foto-cabecera.jpg'`) y se encarga de que las rutas funcionen.
- **Versión final optimizada.** Con `npm run build` genera una web ligera: junta y comprime el código y renombra los archivos para que el navegador no use versiones antiguas guardadas en caché.
- **Es el estándar actual.** Create React App, la herramienta que se usaba antes, está deprecada, y la propia documentación de React recomienda herramientas como Vite.

## Ventajas de React frente a HTML + CSS + JavaScript tradicional
 
Este currículum lo podría haber hecho solo con HTML y CSS, pero React aporta varias ventajas que se notan incluso en un proyecto pequeño como este:
 
- **Componentes reutilizables.** Cada parte que se repite (una tarjeta, una píldora, un puesto de trabajo) se define una sola vez y se reutiliza. En HTML habría que copiar y pegar el mismo bloque y modificarlo en cada sitio.
- **Datos separados de la presentación.** La información del currículum está en listas de JavaScript y la página se genera a partir de ellas con `.map()`. Para añadir un idioma o un trabajo basta con añadir una línea a la lista, sin tocar la estructura HTML.
- **Código más ordenado.** Cada componente vive en su propio archivo con una única responsabilidad, lo que hace el proyecto más fácil de leer, mantener y ampliar.
- **Escalabilidad.** Si en el futuro el currículum crece (un modo oscuro, cambiar de idioma, cargar los datos desde un archivo o una API), React lo facilita gracias al estado (`useState`) y a la estructura por componentes.
- **Ecosistema y demanda laboral.** React es una de las librerías de interfaz más usadas, con una gran comunidad, mucha documentación y muchas ofertas de trabajo que la piden.

Como contrapartida, React añade una capa de complejidad: necesita Node.js, instalar dependencias y un paso de compilación.

## Estructura del proyecto

```
curriculum_vitae/
├── public/                     # Archivos estáticos (favicon)
├── src/
│   ├── assets/                 # Imágenes (foto de perfil y fondo)
│   ├── componentesReact/
│   │   ├── Fondo.jsx           # Fondo animado
│   │   ├── Tarjeta.jsx         # Caja de cada sección con su título
│   │   ├── Pildora.jsx         # Píldora de habilidad/idioma/competencia con su nivel
│   │   ├── ItemExperiencia.jsx # Puesto de trabajo
│   │   └── ItemEducacion.jsx   # Estudio o titulación
│   ├── App.jsx                 # Componente principal y datos del currículum
│   ├── App.css                 # Estilos
│   └── main.jsx                # Punto de entrada
├── index.html
└── package.json
```

## Cómo ejecutarlo

Necesitas tener instalado Node.js.

```bash
# 1. Clonar el repositorio
git clone https://github.com/RaYk15/MiCurriculum.git
cd MiCurriculum

# 2. Instalar las dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

Después, abre en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## Personalizarlo

Todos los datos están al principio de `src/App.jsx`, en las listas `habilidades`, `competenciasPersonales`, `idiomas`, `experiencia` y `educacion`. Para cambiar el contenido basta con editar esas listas; los componentes se encargan del resto.

## Autor

**Marcos Villagómez Escaño**
