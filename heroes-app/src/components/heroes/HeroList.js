import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

// este sera un componente el cual sera usado en las pages enviado el párametro correspondiente
export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="card-columns"> 
           {
               heroes.map(heroe => (
                   <HeroCard 
                    key={heroe.id}
                    {...heroe}
                    > 

                   </HeroCard>
               ))
           } 
        </div>
    )
}
