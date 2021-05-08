import React, { useMemo } from 'react'
import queryString from 'query-string'

import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history,location}) => {

    // este hook puede obtener mas rapido el location que viene en los props
    // const locationHook = useLocation()

    // const params = new URLSearchParams(locationHook.search)
    // const params = new URLSearchParams(location.search)

    // useMemo(() => {
    //     console.log(params.get("q"))
    // }, [params.get("q")])

    // usamos la libreria queryString para obtener los parametros query
    const { q } = queryString.parse(location.search)

    // const heroesFiltered = heroes;

    const [formValues, handleInputChange] = useForm({
        name:q
    })

    const { name } = formValues

    // const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const heroesFiltered =  useMemo(() => getHeroesByName(q), [q])


    const handleSearch = (e) =>{
        e.preventDefault()
        history.push(`?q=${name}`)
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>

                        <input 
                            type="text"
                            placeholder="Find your hero"
                            name="name"
                            className="form-control"
                            onChange={handleInputChange}
                            value={name}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr/>

                    {
                        (q === '')
                            &&
                            <div className="alert alert-info">
                                Search a hero
                            </div>

                    }

                    {
                        (q !=='' && heroesFiltered.length == 0)
                            &&
                            <div className="alert alert-danger">
                                No se encontro {q}
                            </div>
                    }

                    {
                        heroesFiltered.map(hero =>(
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            ></HeroCard>
                        ))

                    }

                </div>
            </div>

        </div>
    )
}
