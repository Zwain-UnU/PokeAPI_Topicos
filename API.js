const elementoImagen = document.getElementById('pokemon-img');
const elementoNombre = document.getElementById('pokemon-name');

async function obtenerPokemonAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 151) + 1;
    let urlDeLaApi = `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`;

    try {
        let respuesta = await fetch(urlDeLaApi);
        let datosPokemon = await respuesta.json();

        elementoImagen.src = datosPokemon.sprites.other['official-artwork'].front_default;
        elementoImagen.className = 'silueta';
        elementoNombre.textContent = "???";
        elementoNombre.dataset.nombreReal = datosPokemon.name;
    } catch (error){
        console.log("Error al conectar con la API: ", error);
    }
}

function revelarPokemon() {
    elementoImagen.className = 'revelado';
    let nombreReal = elementoNombre.dataset.nombreReal;
    elementoNombre.textContent = nombreReal.toUpperCase();
}

document.getElementById('btn-revelar').addEventListener('click', revelarPokemon);
document.getElementById('btn-siguiente').addEventListener('click', obtenerPokemonAleatorio);

obtenerPokemonAleatorio();

