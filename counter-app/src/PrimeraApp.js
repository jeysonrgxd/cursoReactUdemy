// import React, { Fragment } from 'react'
import React from 'react'

// importamos una libreria que nos ayudara a las personas que usen nuestrpo componentes pasar los props adecuados
import PropTypes from 'prop-types'


// FC (functional components)
const PrimeraApp = ({ saludar, subtitulo }) =>{
   const saludo = "Jeyson"
   const valores = [1,2,3,4,5,6]
   const objeto = { 
      saludo
   }

   return (
      <>
         <h1>Hola Mundo {saludo}</h1>
         <p>{valores}</p>
         <p>{objeto.saludo}</p>
         <pre>{JSON.stringify(objeto,null,2)}</pre>
         <p>{saludar}</p>
         <p>Mi primera aplicacion</p>
         <p id="subtitle">{subtitulo}</p>
      </>
   );
}

// de esta forma nos aseguramos que los props de nuestro componente tiene que ser de un tipo de valor y que sea requerido osea que nos pasen ese valor
PrimeraApp.propTypes = {
   saludar : PropTypes.string.isRequired
}

// si utilizamos esta forma de definir por defecto el valor de nuestras props, tendremos el prop en nuestro componente, que adiferencia que si establecemos un valor por defecto en los parametro que recive la funcion
PrimeraApp.defaultProps = {
   subtitulo:'Soy un subtitulo'
}

export default PrimeraApp;