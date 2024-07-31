// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json()
//     .then(value => console.log(value.name)))
//     .catch(error => console.error(error))

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Could not Fetch Resources")
        }
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
    }
    catch(error){
        console.log(error)
    }
}