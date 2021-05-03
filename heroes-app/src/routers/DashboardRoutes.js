import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { Navbar } from '../components/ui/NavBar'


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar></Navbar>

            <div>
                <Switch>
                    <Route exact to="/marvel" component= {MarvelScreen}></Route>
                    <Route exact to="/marvel" component= {DcScreen}></Route>
                    <Route exact to="/hero/:heroId" component= {HeroScreen}></Route>
                    
                    {/* si no encuentra ni uno me muestra el de marvel */}
                    <Redirect to="/marvel"></Redirect>
                </Switch>   
            </div>
        </>
    )
}
