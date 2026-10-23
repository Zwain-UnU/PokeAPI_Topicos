const elementoImagen = document.getElementById('imagen_pokemon');
const elementoNombre =  document.getElementById('nombre_pokemon');

async function obtenerPokemonAleatorio() {
    
    let numeroAleatorio = Math.floor(Math.random() * 151) + 1;

    let urlDeLaApi = `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`;

    try {
        
        let respuesta = await fetch(urlDeLaApi)

        let datosPokemon = await respuesta.json()

        elementoImagen.src = datosPokemon.sprites.other['official-artwork'].front_default;

        elementoImagen.className = 'silueta';

        elementoNombre.textContent = "???";

        elementoNombre.dataset.nombreReal = datosPokemon.name;
3

    } catch (error){

        console.log("Error al conectar con la API: ", error);

    }

}

function revelarPokemon() {

    elementoImagen.className = 'revelado';

    let nombreReal = elementoNombre.dataset.nombreReal;

    elementoNombre.textContent = nombreReal.toUpperCase();

}

obtenerPokemonAleatorio()
