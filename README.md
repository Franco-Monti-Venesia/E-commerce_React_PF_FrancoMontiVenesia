# E-commerce de Pastas - Franco Monti Venesia
- Tengo pensado hacer un e-commerce de pastas, con el estilo y colores que les fui dando, espero que te guste la idea, quedo al pendiente de tus correcciones, saludos!


# React + Vite - Serie de pasos (Clase 1)

- Creamos nuestra carpeta y abrimos VSC desde ahí.
- Ejecutamos el comando `npm create vite`.
@@ -11,4 +11,33 @@
- `index.css` se elimina.
- `App.css` se borra todo su contenido.
- En `main.jsx` quitamos StrictMode tanto en la línea 1 (importación) como en la etiqueta que envuelve al <App />. También quitamos la importación de `index.css` ya que este archivo no existe más.
- En `App.jsx` eliminamos casi todo. Lo único que vamos a dejar es el return y un h2.
- En `App.jsx` eliminamos casi todo. Lo único que vamos a dejar es el return y un h2.
# Clase 2
- JSX es cuando "mezclamos" JS con HTML (XML realmente).
- Cuando trabajamos con JSX debemos retornar un único elemento. Es decir, si quiero retornar dos etiquetas, necesito envolverlas en un único div o bien en un fragment (<></>)
## Sugar sintax
- Manera simplificada de realizar algunas tareas
- `Ejemplo: let contador = 0 // contador++ le asigna el valor de contador sumado a 1`
- `Destructuring de objetos // const {nombre} = objeto corresponde a crear una variable nombre con un valor objeto.nombre`
- `Destructuring de arrays // const [primero, segundo] = array corresponde a crear variables primero y segundo con un valor array[0] y array[1] respectivamente`
## ClassName
- Utilizamos className en vez de class para las etiquetas.
- Necesitamos exportar los componentes para poder traerlos en otro archivo e importarlos para tenerlos disponibles.
## Primera preentrega
- Tiene una semana para presentarlo (es decir, el 17 de febrero de 2025 CIERRA).
- Obligatorio presentar por GitHub.
- Tiene que tener un componente Navbar que a su vez utilice un componente CartWidget.
- Pueden utilizar react-icons para CartWidget (https://react-icons.github.io/react-icons/)
- Tiene que tener un componente ItemListContainer que reciba por props un mensaje de bienvenida. La prop se llama greetings.
- OPCIONAL: podemos hacer las cards que trabajamos en clase. No es obligatorio.
- OPCIONAL 2: una vez hayan finalizado con la entrega, crean el archivo productos.js para la clase que viene.
- No es obligatorio el uso de estilos pero pongan un poco de onda.
- Se puede usar Bootstrap, Tailwind, Css puro, MaterialUI, etc.

