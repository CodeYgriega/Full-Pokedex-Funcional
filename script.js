const pantalla = document.getElementById("pantalla");
const mostrarFoto = document.getElementById("mostrarFoto");
const mostrarShiny = document.getElementById("mostrarShiny");
let shinyOn = false;
const userText = document.getElementById("userText");
const lupa = document.getElementById("lupa");
const space1 = document.getElementById("space1");
const space2 = document.getElementById("space2");
const space3 = document.getElementById("space3");
const space4 = document.getElementById("space4");
const space5 = document.getElementById("space5");
const space6 = document.getElementById("space6");
const pokeball1 = document.getElementById("pokeball1");
const pokeball2 = document.getElementById("pokeball2");
const pokeball3 = document.getElementById("pokeball3");
const pokeball4 = document.getElementById("pokeball4");
const pokeball5 = document.getElementById("pokeball5");
const pokeball6 = document.getElementById("pokeball6");
const x1 = document.getElementById("x-1");
const x2 = document.getElementById("x-2");
const x3 = document.getElementById("x-3");
const x4 = document.getElementById("x-4");
const x5 = document.getElementById("x-5");
const x6 = document.getElementById("x-6");

lupa.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${userText.value}`)
    .then(data => data.json())
    .then(data => {
        if (userText.value === data.name || userText.value == data.id) {
            pantalla.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt=""> <h3>Id: ${data.id}</h3> <h3>Type: ${data.types[0].type.name}</h3>`;
            shinyOn = false;
        }
    })
})

mostrarShiny.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${userText.value}`)
    .then(data => data.json())
    .then(data => {
        if (userText.value === data.name || userText.value == data.id) {
            pantalla.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_shiny}" alt=""> <h3> Id: ${data.id}</h3> <h3>Type: ${data.types[0].type.name}</h3>`;
            shinyOn = true;
        }
    })
})

mostrarFoto.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${userText.value}`)
    .then(data => data.json())
    .then(data => {
        if (userText.value === data.name || userText.value == data.id) {
            pantalla.innerHTML = `<img src="${data.sprites.other.dream_world.front_default}" > <h3> Id: ${data.id}</h3> <h3>Type: ${data.types[0].type.name}</h3>`;
            shinyOn = false;
        }
    })
})

pokeball1.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${userText.value}`)
    .then(data => data.json())
    .then(data => {
        if (shinyOn === false) {
            space1.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="">`;
        }
        else {
            space1.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_shiny}" alt="">`;
        }
    })
})

pokeball2.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${userText.value}`)
    .then(data => data.json())
    .then(data => {
        if (shinyOn === false) {
            space2.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="">`;
        }
        else {
            space2.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_shiny}" alt="">`;
        }
    })
})

pokeball3.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${userText.value}`)
    .then(data => data.json())
    .then(data => {
        if (shinyOn === false) {
            space3.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="">`;
        }
        else {
            space3.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_shiny}" alt="">`;
        }
    })
})

pokeball4.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${userText.value}`)
    .then(data => data.json())
    .then(data => {
        if (shinyOn === false) {
            space4.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="">`;
        }
        else {
            space4.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_shiny}" alt="">`;
        }
    })
})

pokeball5.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${userText.value}`)
    .then(data => data.json())
    .then(data => {
        if (shinyOn === false) {
            space5.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="">`;
        }
        else {
            space5.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_shiny}" alt="">`;
        }
    })
})

pokeball6.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${userText.value}`)
    .then(data => data.json())
    .then(data => {
        if (shinyOn === false) {
            space6.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="">`;
        }
        else {
            space6.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_shiny}" alt="">`;
        }
    })
})

x1.addEventListener("click", (event) => {
    event.preventDefault();
    space1.innerHTML = ` `;
})

x2.addEventListener("click", (event) => {
    event.preventDefault();
    space2.innerHTML = ` `;
})

x3.addEventListener("click", (event) => {
    event.preventDefault();
    space3.innerHTML = ` `;
})

x4.addEventListener("click", (event) => {
    event.preventDefault();
    space4.innerHTML = ` `;
})

x5.addEventListener("click", (event) => {
    event.preventDefault();
    space5.innerHTML = ` `;
})

x6.addEventListener("click", (event) => {
    event.preventDefault();
    space6.innerHTML = ` `;
})

userText.addEventListener("click", (event) => {
    event.preventDefault;
    pantalla.innerHTML = `<h1>¡Bienvenido a tu Pokédex!</h1>
    <p>Puedes buscar un Pokémon específico por su nombre o por su ID con números.</p>
    <p>También puedes crear tu equipo, incluso con los shinys ;)</p>`;
})