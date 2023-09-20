function getCharacters(page, mode, random, done) {
    if (mode === 1) {
        const results = fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        results.then(response => response.json()).then(data => {
            done(data)
        });
    } else {
        const results = fetch(`https://rickandmortyapi.com/api/character/${random}`);
        results.then(response => response.json()).then(data => {
            done(data)
        });
    }
}

function allCharacters() {

    let j = 1;
    for (let i = 1; i < 43; i++) {
        getCharacters(i, 1, 0, data => {
            data.results.forEach(character => {
                const article = document.createRange().createContextualFragment(/*HTML*/`
            
            <article>
                <div id="${j}_div" class="image">
                    <img src="${character.image}" alt="${character.name}">
                </div>
            <h2>Nombre: ${character.name}</h2>
                <span>Estado: ${character.status}</span><br>
                <span>Especie: ${character.species}</span><br>
                <button id="${j}" type="button" class="btn btn-primary">Ver más</button>
            </article>
            `);
                article.querySelector("button").addEventListener("click", () => {
                    window.location.href = `showMore.html?character=${character.id}`;
                });
                const main = document.querySelector("main");
                main.append(article);
                j++;
            })

        });
    }
}

for (let i = 0; i < 5; i++) {

    let random = Math.floor(Math.random() * 826);
    getCharacters(0, 0, random, data => {
        const article = document.createRange().createContextualFragment(/*HTML*/`
            <article>
                <div class="image">
                    <img src="${data.image}" alt="${data.name}">
                </div>
                <h2>Nombre: ${data.name}</h2>
                <span>Estado: ${data.status}</span><br>
                <span>Especie: ${data.species}</span><br>

            </article>
            `);
        const main = document.getElementById("charactersDay");
        main.appendChild(article);
    });
}

function redirect(id) {

    window.location.href = "showMore.html?character=" + id;
}

allCharacters()

/*const URL = "https://rickandmortyapi.com/api/character";

const HTMLResponse = document.querySelector("#app");

fetch(`${
    URL
}`).then((response) => response.json()).then((characters) => {
    const template = characters.map((character) => `<li>${character.image} - ${character.name} - ${character.status} - ${character.species}</li>`).join("");
    HTMLResponse.innerHTML = `<ul>${template}</ul>`;
});
*/
/*
const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        //0: UNSENT, no se ha llamado al metodo open
        //1: OPENED se ha llamado al metodo open
        //2: HEADERS_RECEIVED se ha llamado al metodo send y se han recibido las cabeceras
        //3: LOADING se esta descargando el cuerpo de la respuesta (body)
        //4: DONE se ha completado la operacion
        const data = JSON.parse(this.responseText);
        const HTMLResponse = document.querySelector("#app");
        const template = data.map(user => `<li>${user.name} - ${user.username} - ${user.email} - ${user.address.street}</li>`).join("");
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${
    URL
}/users`);
xhr.send()
*/
