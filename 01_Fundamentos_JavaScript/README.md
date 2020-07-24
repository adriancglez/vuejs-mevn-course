# FUNDAMENTOS DE JAVASCRIPT

Para empezar a trabajar con Frameworks de JavaScript como VUE, Angular, React, etc, es necesario entender algunas cosas de JavaScript.

## DECLARACIÓN DE VARIABLES

Para declaración de variables existen 3 palabras: `var`, `let`, `const`.

Al declarar una variable utilizando la palabra `var`, JavaScript nos permite volver a declararla con el mismo nombre y al mismo tiempo asignarle un nuevo valor:
    
    var edad = 10;
    var edad = 20;

Esto, a la larga puede representar un error en los resultados esperados, para ello, se incorporó la palabra `let` para definir una variable, lo que nos indicará que una variable ha sido declarada cuando se desee declarar otra con el mismo nombre como en el ejemplo anterior.

    let edad = 10;
    let edad = 20;  // Esto arrojará un error indicando que la variable 'edad' ha sido declarada.

Para declarar una constante se usa la palabra reservada `const`, una constante es una variable cuyo valor nunca cambia.

    const edad = 10;
    edad = 20;  // Esta línea marcará un error, puesto que se está declarando una constante cuyo valor no puede cambiar.

Ejemplos de resultados con `var` y `let`:

Con `var`:

    var edad = 10;

    if (true) {
        var edad = 10;
        console.log(edad);  // Imprime 20
    }

    console.log(edad);  // Imprime 20

Con `let`:

    let edad = 10;

    if (true) {
        let edad = 20;
        console.log(edad);  // Imprime 20
    }

    console.log(edad);  // Imprime 10

---

## FUNCIONES DE FLECHA

Las funciones de flecha ayudan a simplificar un poco más el código.

La forma tradicional para declarar funciones:

    function myFunction() {
        ...
    }

La forma de convertir esta función a función de flecha:

    const myFunction = () => {
        ...
    }

Para declarar una función de flecha con N cantidad de parámetros:

    const myFunction => (param1, param2, param3, ...) => {
        ...
    }

Si la función recibirá uno y sólo un parámetro, se pueden omitir los paréntesis:

    const myFunction = param => {
        ...
    }

Si la función tiene como cuerpo el retorno de un valor o de una expresión, de la forma normal sería:

    const myFunction = (param1, param2, ...) => {
        return 'Hello World!';
    }

Se puede reducir de la forma: 

    const myFunction = (param1, param2, ...) => 'Hello World!';

---

## TEMPLATE STRING

Una forma de concatenar cadenas con variables es usando el operador `+`

    const numero = (num) => {
        return 'El número es ' + num;
    }

Una forma intuitiva y con mejor estructura para realizar la concatenación:

    const numero = (num) => {
        return `El número es ${num}`;
    }

Simplificada:

    const numero = (numero1m, numero2) => (`La suma es: ${numero2 + numero2}`);

## OBJETOS

Para declarar un objeto, se usa la sintaxis:

    const objeto = {
        propiedad1: value,
        propiedad2: value,
        ...
    }

Un objeto con muchas propiedades, sus propiedades aceptan diferentes tipos de datos.

Para acceder a todas las propiedades de un objeto, basta con llamar al objeto. Para acceder a una propiedad específica de un objeto, hay que llamar al objeto seguido de punto (.) y el nombre de la propiedad.

    objeto.propiedad2;

Para crear una nueva propiedad a un objeto, basta con llamar al objeto, seguido de punto (.) y el nombre de la nueva propiedad asignando el nuevo valor.

    objeto.nuevapropiedad = value;

## DESTRUCTURING OBJECTS

Esta característa nos permite asignar los valores de las propiedades de un objeto a variables de una forma sencilla, sin tener que declarar la variable y asignarle el valor la propiedad del objeto directamente. La sintaxis para el destructuring objetcs:

    const { prop1, prop3, prop2, ... } = objeto;

Basta con declarar un objeto de variables que apuntarán a los nombres de las propiedades del objeto asignado. No importa el orden pero si importa el nombre de las variables.