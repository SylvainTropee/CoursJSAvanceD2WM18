async function callApi(url) {

    let response = await fetch(url);

    if (response.ok) {
        return response.json()
    }
}

async function getProvinces() {

    //j'appelle mon api et j'attends que les données reviennent
    let data = await callApi("https://www.odwb.be/api/explore/v2.1/catalog/datasets/provincesprovincies-belgium/records")

    displayProvinces(data.results)

    // //sur les données que je récupère je boucle sur la partie result afin de créer les options du select
    // data.results.forEach((province) => {
    //     console.log(province)
    //     let option = document.createElement('option')
    //     option.innerText = province['prov_name_fr'][0]
    //
    //     document.getElementById('provinces').append(option)
    // })
}

function displayProvinces(provinces) {

    provinces.forEach((province) => {
        console.log(province)
        let option = document.createElement('option')
        option.innerText = province['prov_name_fr'][0]
        option.value = province['prov_code'][0]

        document.getElementById('provinces').append(option)
    })
}

async function getLocalities() {

    let provCode = document.getElementById('provinces').value
    let url = `https://www.opendata.namur.be/api/explore/v2.1/catalog/datasets/communesgemeente-belgium/records?where=prov_code%3D${provCode}&limit=20`

    let data = await callApi(url)
    displayLocalities(data.results)
}

function displayLocalities(localities) {

    document.getElementById('communes').innerHTML = ""

    localities.forEach((locality) => {
        console.log(locality)
        let option = document.createElement('option')
        option.innerText = locality['mun_name_fr'][0]
        option.value = locality['mun_code'][0]

        document.getElementById('communes').append(option)
    })
}

function init(){
    getProvinces()
    document.getElementById('provinces').addEventListener('change', getLocalities)

}

window.onload = init


