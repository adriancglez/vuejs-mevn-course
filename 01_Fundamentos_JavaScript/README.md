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