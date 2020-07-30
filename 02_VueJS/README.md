# VUE JS

`VueJS` es un framework de JavaScript, así como Angular y React.

## INSTALACIÓN

Existen dos formas de instalar `VueJS`: CDN y NPM

Para instalar por CDN, debemos importar el script que nos proporciona la página de VueJS en el `html` principal de nuestra aplicación web.

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

## CREANDO INSTANCIA DE VUE

Para empezar a trabajar con `Vue`, en primera instancia debemos definir una sección de nuestra página web donde indicaremos a Vue que en esa parte va a trabajar, se recomienda que esa sección/etiqueta se identifique con un `id`:

    <div id="app">
        ...    
    </div>

Posteriormente, en el script donde escribiremos nuestro código `js`, debemos crear una instancia de Vue que recibirá un objeto.

    const app = new Vue({
        ...
    });

El objeto Vue, cuenta con varias propiedas que iremos mencionando a lo largo del curso, por ahora mencionaré dos de ellas que nos permitirán empezar a desarrollar nuestro código en Vue.

La propiedad `el`, hace referencia al elemento o etiqueta donde Vue trabajará, es por así decirlo, el selector.

    const app = new Vue({
        el: '#app',
        ...
    });

La propiedad `data`, que es un objeto hace referencia a los datos o variables que usaremos para procesar y mostrar en nuestra aplicación, los datos o variables puede ser de todos los tipos conocidos: variables con algún tipo de dato en particular, arreglos, objetos, etc.

    const app = new Vue({
        el: '#app',
        data: {
            myFirstData: 'valueData',
            mySecondData: {
                propData1: 'value1',
                ...
            },
            myThirdData: [
                ...
            ],
            ...
        },
        ...
    });

Para imprimir los valores de los datos declarados en el objeto `data` en el `html` de nuestra aplicación, debemos usar `{{  }}` y dentro de ellas el nombre de la variable a imprimir `{{ myFirstData }}`

    <div id="app">
        <h1>{{ myFirstData }}</h1>
    </div>

## DIRECTIVAS

### v-if

La directiva `v-if` nos sirve para evaluar expresiones y mostrar/ocultar etiquetas `html`:

    <span v-if="expression == true">Show this</span>
    <span v-if="expression == false">Show this</span>

### v-for

La directiva `v-for` sirve para recorrer un arreglo o un objeto y mostrar sus items o contenidos en etiquetas `html`.

    <ul>
        <li v-for="item of items"></li>
    </ul>