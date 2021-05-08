import React from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm'

export const SearchScreen = () => {

    const heroesFiltered = heroes;

    const [formValues, handleInputChange] = useForm({
        name:''
    })

    const { name } = formValues

    const handleSearch = (e) =>{
        e.preventDefault()
        console.log(e)
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
                            autocomplete="off"
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
