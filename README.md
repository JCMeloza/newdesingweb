# Conquer Blocks

Conquer Blocks es un proyecto educativo ficticio que simula una plataforma de cursos de programación, inteligencia artificial y blockchain. Su objetivo es servir como ejemplo práctico para el aprendizaje de desarrollo web moderno, empleando buenas prácticas de organización y tecnologías actuales.

## Tecnologías empleadas

- **HTML5**: Estructura semántica de las páginas.
- **CSS3**: Estilos avanzados y responsive.
- **SASS**: Preprocesador CSS para modularidad y escalabilidad.
- **JavaScript moderno**: Interactividad básica y modularidad.
- **Vite**: Herramienta de desarrollo para servir y construir el proyecto rápidamente.

## Estructura del proyecto

- `/index.html`, `/about.html`, `/register.html`, `/login.html`, etc.: Páginas principales.
- `/css/`: Archivos CSS generados.
- `/sass/`: Código fuente SASS organizado por carpetas (abstracts, base, components, layout, pages, themes, vendors).
- `/img/`: Imágenes y recursos gráficos.
- `/src/main.js`: Código JavaScript principal.
- `vite.config.js`: Configuración de Vite.
- `package.json`: Dependencias y scripts del proyecto.

## Autor

Desarrollado por **@JCarlosMLg** (Discord) y **JCMeloza** (GitHub).

## Tipo de proyecto

Proyecto educativo y demostrativo, sin fines comerciales. Ideal para practicar y enseñar desarrollo web moderno, arquitectura de estilos y buenas prácticas de organización de código.

## Pasos para visualizar el proyecto

1. **Clona el repositorio** (o descarga los archivos):
   ```bash
   git clone <url-del-repositorio>
   cd <carpeta-del-proyecto>
   ```

2. **Instala las dependencias** (requiere Node.js y npm):
   ```bash
   npm install
   ```

3. **Compila los estilos SASS** (si editas los archivos `.scss`):
   - Puedes usar el script de Vite para desarrollo:
     ```bash
     npm run dev
     ```
   - O compilar para producción:
     ```bash
     npm run build
     ```

4. **Visualiza el proyecto**
   - En modo desarrollo, abre la URL que te indica Vite (por defecto: `http://localhost:5173`).
   - También puedes abrir directamente los archivos HTML en tu navegador, pero para rutas y recursos relativos se recomienda usar el servidor de desarrollo.

---

¡Explora el código, experimenta y aprende!
