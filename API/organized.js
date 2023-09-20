//This function is to connect with the API
function getCharacters(i, done) {
    const results = fetch(`https://rickandmortyapi.com/api/character/?page=${i}`);
    results.then(response => response.json()).then(data => {
        done(data)
    });
}

//This part is for organize the characters by species
let especies = ['Human', 'Alien', 'Humanoid', 'unknown', 'Poopybutthole', 'Mythological Creature', 'Animal', 'Robot', 'Cronenberg', 'Disease'];
for (let a = 0; a < 9; a++) {
    for (let i = 1; i <= 42; i++) {
        getCharacters(i, data => {
            data.results.forEach(personaje => {
                if (personaje.species === especies[a]) {
                    let article = document.createRange().createContextualFragment(/*html*/
                        `<article>
                     <div class="image">
                     <img src="${personaje.image}" alt="personaje ${personaje.name}">
                     </div>
                     <h2>${personaje.name}</h2>
                     <h4>${personaje.status}</h4>
                     <h4>${personaje.species}</h4>
                     
                     </article>`
                    );
                    article.querySelector("img").addEventListener("click", () => {
                        window.location.href = `../vistas/mas_info.html?personaje=${personaje.id}`;
                    });
                    let main = document.querySelector("main");
                    main.appendChild(article);
                }

            });
        });

    }
}
