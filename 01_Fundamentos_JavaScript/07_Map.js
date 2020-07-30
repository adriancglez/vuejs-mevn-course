const getPokemons = async() => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await resp.json();
        /* console.log(data.results); */
        data.results.map(pokemon => console.log(pokemon.name));
    } catch(error) {
        console.log(error);
    }
}

getPokemons();