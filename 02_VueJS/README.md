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

### v-model

La directiva `v-model` nos permite hacer una conexión directa entre un `input` y el `JavaScript`, más específicamente, entre el `input` y un dato declarado en el objeto `data` en tiempo real.

    <input type="text" v-model="myNewData">

### v-bind:class

La directiva `v-bind:class`, nos permite incorporar clases de manera dinámicas en nuestro `HTML`, existen múltiples formas de usarla, las más comunes:

* Cuando queremos agregar una clase en forma plana:

    `<div :class="'myClass'"></div>`

* Cuando el nombre de nuestra clase se encuentra en una variable declarada en el `data`:

    `<div :class="myClassWithVariable"></div>`

* Cuando tenemos un array entre clases planas y variables declaradas en el `data`:

    `<div :class="['myClass', myClassWithVariable]">`

* Cuando nuestra variable se encuentra en un objeto:

    `<div :class="{'myClass': true}">`

## MÉTODOS

Es un objeto propio de la instancia de `Vue`, que se declara como una nueva propiedad, junto con `el`, y `data`. Dentro de la propiedad `methods` se declaran todos los métodos que se utilizarán.

    el: ...,
    data: {
        ...
    },
    methods: {
        myFirstMethod() {
            ...
        },

        mySecondMethod() {
            ...
        }
    }

## EVENTOS

### DE MOUSE

#### CLICK

Existen dos formas de manejar eventos en `Vue`, ya sea usando la expresión `v-on:click='myFirstMethod'` ó de forma mas simplificada `@click='mySecondMethod'`

    <button v-on:click="addTecnologia">Click here!</button>

    <button @click="addTecnologia">Click here!</button>

### TECLAS

#### KEYUP

Para llamar a un evento keyup de alguna tecla en particular, lo realizamos de dos formas posibles

    <input v-on:keyup.enter="myFirstMethod" type="text">

    <input @keyup.enter="myFirstMethod" type="text">

## ALCANCES DENTRO DE LA INSTANCIA `VUE`

Para acceder a cualquier propiedad de algún objeto de la instancia `Vue`, por ejemplo, si alguna variable declarada en `data` desea usarse en alguna función declarada en `methods`, debemos usar la palabra reservada `this`

    ...
    data: {
        myData: 'myData',
        myNewData: 'myNewData'
    }
    methods: {
        myFirstMethod() {
            this.myData = this.newData;
        }
    }

## TIPOS DE DATOS EN `v-model`

Para especificar el tipo de dato al que se va a transformar la variable vinculada con el objeto `v-model`:

    v-model.number = 'myNumberData'

## COMPUTED

Otra propiedad que pertenece a la instancia de `Vue` es `computed`, que es un objeto que contiene funciones que retornan un valor y que son invocadas automáticamente después de realizar alguna operación

    el: ...,
    data: {
        ...
    },
    methods: {
        ...
    },
    computed: {
        myFirsListeningtMethod() {
            ...
            return value;
        }
    }

y puede ser llamado directamente en el `HTML` por medio de `{{  }}`

    <div{{ myFirsListeningtMethod }}</div>

A diferecia de los métodos, las propiedades computadas son cacheadas basándose en sus dependencias, es decir, se almacenan en caché del navegador.

## CICLO DE VIDA DE VUE

`Vue` pasa por diferentes etapas, la primera es su instancia, antes de crear las propiedades `el`, `data`, etc., hace una función llamada `beforeCreate`.

Para comprender mejor el ciclo de vida de `Vue`, obsérvese la gráfica.

![life cicle](/02_VueJS/07_Ciclo_Vida_Vue/lifecycle.png)

## COMPONENTES

Consiste en crear pequeñas partes para separar nuestra aplicación web.

Para crear componentes en `Vue`, se debe crear la instancia de `Vue` de la forma normal identificando el contenedor.

    ...
        <div id="app">
            
        </div>
    ...
    <script>
        new Vue({
            el: '#app',
            data: {
            },
            ...
        });
    </script>

Es recomendable que los componentes se creen en una carpeta exclusiva, llamada `components`, dentro de ella, los archivos `js` de cada componente.

La sintaxis básica de los archivos `js` para crear componentes:

    Vue.component('app-my-component', {
        template: //html
        `
        <div>
            <h1>{{myVar}}</h1>
        </div>
        `,
        data() {
            return {
                myVar: 'Hola desde un componente de Vue'
            }
        }
    });

En el `html` donde se desea implementar el componente, se debe realizar mediante la etiqueta con el nombre declarado en el componente, por ejemplo `<app-my-component></app-my-component>`

    ...
        <div id="app">
            <app-my-component></app-my-component>
        </div>
    ...

Y debe importarse el `script` que es el archivo `js` que contiene el código del componente después de la importación del script `Vue`

    <script src="components/my-component.js"></script>
