//This function is to connect with the API
function getCharacters(id, done) {

    const results = fetch(`https://rickandmortyapi.com/api/character/${id}`);
    results.then(response => response.json()).then(data => {
        done(data)
    });
}
//This function  is for print the character selected
function showMore(charId) {

    this.getCharacters(charId, data => {
        let name = document.getElementById("name").innerHTML = `Nombre: ${data.name}`;
        let image = document.getElementById("img").src = data.image;
        let status = document.getElementById("status").innerHTML = `Estatus: ${data.status}`;
        let species = document.getElementById("species").innerHTML = `Especie: ${data.species}`
        let gender = document.getElementById("gender").innerHTML = `Género: ${data.gender}`;
        let origin = document.getElementById("origin").innerHTML = `Origen: ${data.origin.name}`;
        let location = document.getElementById("location").innerHTML = `Ubicación actual: ${data.location.name}`;
        let episode = document.getElementById("episodes").innerHTML = `Episodios: ${data.episode.length}`;
    });
}

let get = window.location.search;
const params = new URLSearchParams(get);
showMore(params.get("character"));

