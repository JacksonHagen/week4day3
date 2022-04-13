import { ProxyState } from "../AppState.js";
import { myPokemonService } from "../Services/MyPokemonService.js";
import { Pop } from "../Utils/Pop.js";

function _drawPokedex() {
    
}

export class MyPokemonController {
    constructor() {
        ProxyState.on('pokedex', _drawPokedex)
        this.getPokedex()
    }
    async addToPokedex() {
        try {
            await myPokemonService.addToPokedex()
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.error(error)
        }
    }
    async getPokedex() {
        try {
            await myPokemonService.getPokedex()
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.error(error)
        }
    }
}