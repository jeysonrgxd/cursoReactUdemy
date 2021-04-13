import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'

// importamos nuestro estylo
import './index.css'  


const divRoot = document.querySelector("#root")

// permite crear nuestro arbol de componentes y comunicarnos entre componentes
ReactDOM.render(<CounterApp value={10} />,divRoot)
// ReactDOM.render(<PrimeraApp saludar='jeyson' />,divRoot)
// ReactDOM.render(<PrimeraApp saludar="Hola jeyson"/>,divRoot)