import { ProxyState } from "../AppState.js"
import { apiPokemonService } from "../Services/ApiPokemonService.js"
import { pokemonApi } from "../Services/AxiosService.js"
import { Pop } from "../Utils/Pop.js"

function _drawPokemon() {
    let template = ''
    ProxyState.pokemon.forEach(p => template += /*html*/ `<li class="fs-2 capitalize selectable" onclick="app.apiPokemonController.setActivePokemon('${p.name}')">${p.name}</li>`)
    document.getElementById('api-pokemon').innerHTML = template
}
function _drawActivePokemon() {
    let p = ProxyState.activePokemon
    let template = /*html*/`
    <div class="card w-50">
        <img src='${p.img}' class="card-img-top" alt="...">
        <div class="text-center">
        <h4 class="capitalize">${p.name}</h4>
        </div>
        <div class="card-body d-flex justify-content-around">
        <div>
            <h5>Height: ${p.height}'</h5>
        </div>
        <div>
            <h5>Weight: ${p.weight}lbs</h5>
        </div>
        </div>
        <button class="btn btn-primary text-light w-auto mb-2 ms-2 me-2" onclick="app.myPokemonController.addToPokedex()">Add to Pokedex</button>
    </div>
    `
    document.getElementById('active-pokemon').innerHTML = template
}

export class ApiPokemonController {
    constructor() {
        ProxyState.on('pokemon', _drawPokemon)
        ProxyState.on('activePokemon', _drawActivePokemon)
        this.getApiPokemon()
    }
    async getApiPokemon() {
        try {
            await apiPokemonService.getApiPokemon()
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.error(error)
        }
    }
    setActivePokemon(name) {
        apiPokemonService.setActivePokemon(name)
    }
}