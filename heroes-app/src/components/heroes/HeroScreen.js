import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById'

// destructuramos el argumento prop para obtener el heroe, se puede ver mejor en la consola 
//del navegador mirando los componentes
export const HeroScreen = ({match,history}) => {

    //usamos el hook de react router para obtener parametros de url
    const {heroId} = useParams()

    // console.log(match.params)
    console.log(heroId)
    // const heroe = getHeroById(heroId)

    // si el id no cambia no tengo que volver a generar esta informacion, 
    //extraemos el heroe y lo memorizamos
    const heroe = useMemo(() => getHeroById(heroId), [heroId])
    console.log(heroe)

    // si no encontramos a ningun heroe nos redirijira al principal esto es mas que todo
    //si alguien pone una url mala
    if(!heroId){
        return <Redirect to="/"></Redirect>
    }

    

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = heroe

    const handleReturn = ()=>{

        // si abrimos por primera vez una ruta de un superheroe y le damos atras nos validara el length
        if(history.length <=2 ){

            history.push("/")

        }else{
            // retrocedeme atras
            history.goBack()
        }

    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${heroId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__zoomIn"
                />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"> <b> Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"> <b> First appearance: </b>{ first_appearance }</li>
                </ul>
                <h5>Characters </h5>
                <p> {characters} </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                    >
                    return
                </button>
            </div>

        </div>
    )
}
