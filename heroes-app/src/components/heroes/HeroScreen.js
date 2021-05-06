import React from 'react'
import { useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById'

// destructuramos el argumento prop para obtener el heroe, se puede ver mejor en la consola 
//del navegador mirando los componentes
export const HeroScreen = ({match}) => {

    //usamos el hook de react router para obtener parametros de url
    const {heroId} = useParams()

    // console.log(match.params)
    console.log(heroId)
    const heroe = getHeroById(heroId)
    console.log(heroe)

    return (
        <div>
            <h1>HeroScreen</h1>

            <pre>
                {JSON.stringify(heroe,null,3)}
            </pre>
        </div>
    )
}
