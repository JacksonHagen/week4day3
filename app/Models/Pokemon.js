
export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.sprites.other['official-artwork'].front_default
        this.weight = data.weight
        this.height = data.height
        this.user = 'Hardcoded FIXME'
    }
}