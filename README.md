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
