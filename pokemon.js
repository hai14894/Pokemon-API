async function getPokemon(name){
    try{
        const respond = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return respond.data
    }catch(e) {
        e = "The pokemon you are looking for does not exist"
        console.log(e);
    }
}   

const searchBtn = document.querySelector("#search-btn")
const searchBar = document.querySelector("#search-bar")

const pokeImg = document.querySelector("#poke-img")
const pokeName = document.querySelector("#poke-name")
const pokeHp = document.querySelector("#poke-hp")

searchBtn.addEventListener(
    "click",
    async() => {
        const pokemon = await getPokemon(searchBar.value)
        pokeImg.src = pokemon.sprites.front_default
        pokeName.innerHTML = pokemon.name
        pokeHp.innerHTML = pokemon.stats[0].base_stat

        searchBar.value = ""
    })
async function getPokemon1(name){
    const respond = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(respond);
    
}
getPokemon1("pikachu")