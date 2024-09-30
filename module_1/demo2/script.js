

function init(){


    const cities = ["Rennes", "Nantes", "Quimper", "Niort", "Brest"];

    //récupérer l'élement select
    const select = document.getElementById("cities");
    console.log(select)

    //lui associer la liste des villes en ajoutant des options
    cities.forEach(function (city){

        //pour chaque élément du tableau je crée une option
        let option = document.createElement('option');
        //configure sa valeur non visible
        option.value = city.toLowerCase();
        //configure sa valeur visible
        option.innerText = city;

        //permet d'ajouter comme enfant du select notre option
        select.append(option);
    })

    //ajouter un évènement qui permet d'écrire dans le DOM la ville sélectionnée
    select.addEventListener('change',  function()  {
        console.log(this);
        //this correspond à l'instance de l'élément sur lequel s'applique le listener
        let value = this.value
        // création d'une instance de p
        let p = document.createElement('p');
        p.innerText = value;
        //ajout dans le dom de l'élément
        document.body.append(p)
    })
}


function toDoAfterSelectChange(){
    console.log("TODO")
}

window.onload = init











