const getPokemons = async() => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await resp.json();
        /* console.log(data.results); */
        const names = data.results.filter(pokemon => pokemon.name !== 'bulbasaur');
        console.log(names);
    } catch(error) {
        console.log(error);
    }
}

getPokemons();