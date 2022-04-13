import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js"

class MyPokemonService {
    async addToPokedex() {
        const res = await sandboxApi.post('pokemon', ProxyState.activePokemon)
        console.log(res);
        ProxyState.pokedex = [...ProxyState.pokedex, new Pokemon(res.data)]
    }
    async getPokedex() {
        const res = await sandboxApi.get('pokemon')
        console.log('sandbox api', res);
        ProxyState.pokedex = res.data.map(p => new Pokemon(p))
        console.log('pokedex', ProxyState.pokedex)
    }

}

export const myPokemonService = new MyPokemonService()