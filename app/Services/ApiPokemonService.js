import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js"

class ApiPokemonService {
    async setActivePokemon(name) {
        const res = await pokemonApi.get('pokemon/' + name)
        console.log(res);
        ProxyState.activePokemon = new Pokemon(res.data)
    }
    async getApiPokemon() {
        const res = await pokemonApi.get('pokemon')
        console.log(res.data.results);
        ProxyState.pokemon = res.data.results
        console.log(ProxyState.pokemon);
    }

}

export const apiPokemonService = new ApiPokemonService()