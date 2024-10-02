fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let h1 = document.createElement('h1')
        h1.innerText = data.name.toUpperCase()

        let img = document.createElement('img')
        img.src = data.sprites.other.home.front_default


        document.body.append(h1)
        document.body.append(img)
    })