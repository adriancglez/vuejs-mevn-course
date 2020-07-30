fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( respuesta => respuesta.json()) /* Transformamos la información que recibimos en json */
    .then( data => { /* El data es la respuesta transformada en JSON */
        console.log(data.results);
        data.results.forEach(element => {
            console.log(element.name);
        });
    }).catch(err => console.log(err));