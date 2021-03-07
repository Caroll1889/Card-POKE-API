


document.addEventListener('DOMContentLoaded', () => {
    
    const random = getRandomInt(1, 151)
    fetchApi(random)
    
})



const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const fetchApi = async (id) => {
    try {
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        
        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            name: data.name,
            id: data.id,
            type: data.types[0].type.name,
            attack: data.stats[1].base_stat,
            special: data.stats[3].base_stat,
            defense: data.stats[2].base_stat
        }
        showCard(pokemon)
    } catch (error) {
        alert(error)
    }
}

const showCard = (pokemon) => {
    // console.log(pokemon)
    
    const flex = document.querySelector('.flex')
    const template = document.querySelector('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()
    
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img)
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.name} <span>${pokemon.id }</span>`
    clone.querySelector('.card-body-text').textContent = `Type: ${pokemon.type}`
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.attack
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.special
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defense
    
    
    fragment.appendChild(clone)
    flex.appendChild(fragment)
    
}