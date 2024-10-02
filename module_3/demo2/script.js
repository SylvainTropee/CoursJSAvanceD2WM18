let pokemon;

//lancement de l'appel asynchrone
 let f = fetch("https://pokeapi.co/api/v2/pokemon/ditto"/*, {method : "POST", body : JSON.stringify({name : "Robert"})}*/)
    //fetch me renvoie une promise qui contient la reponse HTTP
    //j'en extraie la partie json, then() me permet de résoudre la promise
    //cela lui indique quoi faire quand l'appel revient
    .then(response => response.json())
    //extraire la partie JSON prend du temps, cela me renvoie une nouvelle
    //promise qui contient uniquement mes données
    .then(data => {

        pokemon = data
        console.log("on est là", pokemon);
        //je traite mes données
        //et génère la vue à partir de celle-ci
        console.log(data)
        let h1 = document.createElement('h1')
        h1.innerText = data.name.toUpperCase()

        let img = document.createElement('img')
        img.src = data.sprites.other.home.front_default

        document.body.append(h1)
        document.body.append(img)
    })

console.log(f)
console.log("on est ici", pokemon);