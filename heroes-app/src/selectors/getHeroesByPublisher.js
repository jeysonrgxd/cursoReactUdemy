import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    //validamos si esta el publisher este array

    const validPublishers = ['DC Comics', 'Marvel Comics']

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`)
    }

    //filtrame atodo los objetos de tipo publisher que encuentres y regresamelos en eun array
    return heroes.filter(heroe => heroe.publisher === publisher)
}