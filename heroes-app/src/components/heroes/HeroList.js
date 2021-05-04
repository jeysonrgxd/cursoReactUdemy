import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

// este sera un componente el cual sera usado en las pages enviado el párametro correspondiente
export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <ul> 
           {
               heroes.map(heroe => (
                   <li key={heroe.id}> {heroe.superhero} </li>
               ))
           } 
        </ul>
    )
}
