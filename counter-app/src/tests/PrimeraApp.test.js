// imr y le das tab
import React from 'react'

import '@testing-library/jest-dom'

// import {render} from '@testing-library/react'

import PrimeraApp from '../PrimeraApp'

import { shallow } from 'enzyme'

describe('Pruebas en <PrimeraApp />', () => {

   // test('debe de mostrar el mensaje "Hola soy goku"', () => {
   //    const saludo = "Hola, soy Goku"

      // creamos el producto rederizado de mi componente
      // usamos la destructuracion para obtener la funcion que nos permitira evaluar
      // const { getByText } = render(<PrimeraApp saludar = {saludo}></PrimeraApp>)

      // aca evaluamos si en renderizado del componente existe el texto de la variable saludo
      // para eso usamos la funcion toBeInTheDocument()
      // expect(getByText(saludo)).toBeInTheDocument()
   // })

   test('debe de mostrar <PrimeraApp /> correctamente', () => {
      const saludo = 'Hola, soy Goku'
      // shallow parecido a render
      const wrapper = shallow(<PrimeraApp saludar = {saludo} />)
      expect( wrapper ).toMatchSnapshot()
   })

   test('debe de mostrar el subtitulo enviado por props', ()=>{
      const saludo = 'Hola, soy Goku'
      // shallow parecido a render
      const wrapper = shallow(<PrimeraApp saludar={saludo} />)
   } )

   test("Comparamos el texto del subitulo", ()=>{
      const saludo = 'Hola, soy Goku'
      const subTitulo = 'Soy un subtitulo'
      const wrapper = shallow(
      <PrimeraApp
          saludar={saludo}
         subtitulo = {subTitulo}
      />)

      // ahora gracias alalibreria de airbnb que ahora es de facebook podemos validar la informacion generada al renderizar nuestro componente
      const textoParrafo = wrapper.find('#subtitle').text()
      expect(textoParrafo).toBe(subTitulo);

   })

})