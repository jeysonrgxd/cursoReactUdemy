import { heroes } from '../data/heroes'

export const getHeroesByName = (name = '') => {

    if(name === ''){

        return []
    }
    
    // utilizamos filter ya que este nos devuelve un array con lo que encuentra adiferencia de find que busca y devuelve el valor sin el array
    // return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase() === name.toLocaleLowerCase()) || []
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())) || []
}
