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
const pokeType = document.querySelector("#poke-type")
const pokeHp = document.querySelector("#poke-hp")
const pokeAttack = document.querySelector("#poke-attack")
const pokeSAttack = document.querySelector("#poke-s-attack")
const pokeDefense = document.querySelector("#poke-defense")
const pokeSDefense = document.querySelector("#poke-s-defense")
const pokeWeight = document.querySelector("#poke-weight")
const pokeSpeed = document.querySelector("#poke-speed")
const pokeSkill1 = document.querySelector("#poke-skill1")
const pokeSkill2 = document.querySelector("#poke-skill2")


searchBtn.addEventListener(
    "click",
    async() => {
        event.preventDefault();
        const pokemon = await getPokemon(searchBar.value.toLowerCase())
        pokeImg.src = pokemon.sprites.front_default
        pokeName.innerHTML = pokemon.name.toUpperCase()
        pokeType.innerHTML = pokemon.types[0].type.name
        pokeHp.innerHTML = pokemon.stats[0].base_stat
        pokeAttack.innerHTML = pokemon.stats[1].base_stat
        pokeSAttack.innerHTML = pokemon.stats[3].base_stat
        pokeDefense.innerHTML = pokemon.stats[2].base_stat
        pokeSDefense.innerHTML = pokemon.stats[4].base_stat
        pokeSpeed.innerHTML = pokemon.stats[5].base_stat
        pokeWeight.innerHTML = pokemon.weight
        pokeSkill1.innerHTML = pokemon.abilities[0].ability.name.toUpperCase()
        pokeSkill2.innerHTML = pokemon.abilities[1].ability.name.toUpperCase()



        searchBar.value = ""
    })
async function getPokemon1(name){
    const respond = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(respond);
    
}
getPokemon1("pikachu")