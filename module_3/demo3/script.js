let pokemon;


async function callApi(url) {
    let response = await fetch(url)

    if (response.ok) {
        return response.json()
    }
}

// async function getPokemon() {
//     //lancement de l'appel asynchrone
//     let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     console.log(response)
//     if(response.ok){
//         let data = await response.json()
//         let h1 = document.createElement('h1')
//         h1.innerText = data.name.toUpperCase()
//
//         let img = document.createElement('img')
//         img.src = data.sprites.other.home.front_default
//
//         document.body.append(h1)
//         document.body.append(img)
//     }
// }

async function getData() {
    let data = await callApi("https://pokeapi.co/api/v2/pokemon/ditto")
    console.log(data);
}

getData()



