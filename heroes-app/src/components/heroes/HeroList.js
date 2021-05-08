import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

// este sera un componente el cual sera usado en las pages enviado el párametro correspondiente
export const HeroList = ({publisher}) => {

    // const heroes = getHeroesByPublisher(publisher)

    //memorizamos la funcion ya que si es cambiamos el estado puede ser que se vulva a renderizar 
    // solo re volvera a renderizar si el publisher cambia
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    return (
        <div className="card-columns animate__animated animate__fadeIn"> 
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
