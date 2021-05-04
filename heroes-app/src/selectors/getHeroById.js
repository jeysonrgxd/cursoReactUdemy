import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
    
    //buscame al heroe con el id respectivo
    return heroes.find(heroe => heroe.id === id)
}