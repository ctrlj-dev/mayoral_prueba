# Prueba técnica para Mayoral

Prueba técnica para Mayoral, con las siguientes condiciones:

|              Desktop              |             Mobile              |
| :-------------------------------: | :-----------------------------: |
| ![Desktop](./.github/desktop.png) | ![Mobile](./.github/mobile.png) |

Maquetar las imágenes adjuntas y tener en cuenta los diferentes cortes en móvil y escritorio. La prueba deberá estar subida en un repositorio de GitHub.

Tecnologías/Librerías requeridas:

- React
- Typescript
- Next.js

Funcionalidad a implementar:

- Separa en componentes de una forma óptima y organizada
- La vista debe asemejarse lo más parecido posible a las fotos adjuntas
- Implementar búsqueda de productos por nombre
- Consumir un JSON con los datos de productos (JSON local o externo)
- Cambiar la vista con los iconos indicados en la foto:
  - Escritorio de 4 a 3 elementos
  - Móvil de 3 a 2 elementos
- Implementar lógica y diseño de un componente “ordenar” (precio ascendente y descendente)
- Crea los test unitarios que creas conveniente

## Comenzando 🚀

Para lanzar el proyecto, simplemente haz npm install. Luego usa los siguientes comandos:
    - npm run dev: Lanza el proyecto en una versión de desarrollo.
    - npm run build: Crea una build para producción.
    - npm run start: Lanza la build de producción.
    - npm run lint: Lanza el linter para ver posibles errores.
    - npm test:watch: Lanza jest para los test de manera continúa.
    - npm test: lanza Jest una sola vez para los test.

### Trabajo realizado 📋

Se han usado las tecnologías requeridas para el proyecto. React, Typescript y Next.js, además de Jest para lanzar algunos test. 


### Componentes y estructura 🔧

Para los componentes y la estructura, se ha buscado componentizar en carpetas. Todos los componentes están tipados y se ha buscado
que sean lo mas reutilizables posibles. Para ello, he dejado por props algunos valores como los datos que se le pasan a cada componente o
las funciones de evento, de manera que sea cada página la que decida que valores o eventos debe pasar. 

He realizado algunos test con Jest para algunos componentes, comprobando si renderizan el resultado esperado.

## Tools ⚙️

Para funciones genéricas, he creado un archivo tools, donde encontramos funciones para calcular descuentos, realizar búsquedas, filtrar...etc
También he creado test para las tools, de manera que los test comprueban si las funciones devuelven los valores requeridos.

### Estilos 🔩

Para dar estilos CSS, se ha usado SCSS, creando estructuras anidadas y variables globales compartidas entre los componentes.

### API ⌨️

Para la llamada a la API se ha separado en un archivo aparte, en la carpeta services. Tanto el JSON con los datos
como las imágenes de las camisetas están subidas en un servidor privado, para simular al máximo posible una llamada real.
Como tan solo había una llamada, simplemente se ha usado fecth. 

## interfaces 📦

Las interfaces y enumerados usados se encuentran en la carpeta models.

## Retoques en la configuración 🛠️

He hecho algunos retoques en los archivos de configuración, por ejemplo en jest.config.js debido a problemas al lanzar los tests.

## Para finalizar 🎁

Se ha intentado mantener al máximo posible los estilos. Las imágenes usadas son de la propia web de Mayoral, pero no son las
mismas que aparecen en el ejemplo. 

