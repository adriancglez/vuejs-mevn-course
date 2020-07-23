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

