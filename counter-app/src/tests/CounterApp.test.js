import React from 'react'
import '@testing-library/jest-dom'
import CounterApp from '../CounterApp'
import { shallow } from 'enzyme'

describe("Pruba test en CounterApp", () => {
   // ciclod e prueba de los tests
   // se ejecuta antes de cada una de las evaluaciones
   let wrapper = shallow(<CounterApp />)

   beforeEach(()=>{
      // acemos esto para que cada simulate de nuestro boton no quede grabado para asi poder hacer bien el aumento y decremento
      wrapper = shallow(<CounterApp />)
   })

   // test("Pruebas en el <CounterApp />", () => {
   //    const wrapper = shallow(<CounterApp/>)
   //    expect(wrapper).toMatchSnapshot()
 
   //  })

   // test("debe de mostrar el valor por defecto de 100", () => {
   //    const value = 100
   //    const wrapper = shallow(<CounterApp value = {value} />)
   //    const numberValidate = Number(wrapper.find("h2").text().trim())
   //    expect(numberValidate).toBe(value)

   //  })

   test("debe incrementar con el boton +1", () => {
      // ejecutamos el componente
      // const wrapper = shallow(<CounterApp value = {10} />)

      // ahora utilizaremos el beforeEach para inicializar el wrapper antes de cada ejecucion del test


      // simulamos el boton
      wrapper.find("button").at(0).simulate('click');

      // obtenemos el valor despues de hacer el simulate
      const numberValidate = Number(wrapper.find("h2").text().trim())

      // inspeccionamos si el valor es correcto
      expect(numberValidate).toBe(11)

    })

   test("debe decrementar con el boton -1", () => {
      // ejecutamos el componente
      // const wrapper = shallow(<CounterApp value = {10} />)

      // ahora utilizaremos el beforeEach para inicializar el wrapper antes de cada ejecucion del test

      // simulamos el boton
      wrapper.find("button").at(2).simulate('click');

      // obtenemos el valor despues de hacer el simulate
      const numberValidate = Number(wrapper.find("h2").text().trim())

      // inspeccionamos si el valor es correcto
      expect(numberValidate).toBe(9)

    })
    
   test("debe de colocar el valor por defecto con el btn reset", () => {
      // asemos aumento del value
      wrapper.find("button").at(0).simulate('click');
      wrapper.find("button").at(0).simulate('click');
      console.log(Number(wrapper.find("h2").text().trim())); //output: 12 

      // simulamos el boton click del reset para poder capturar el valor y hacer el expect
      wrapper.find("button").at(1).simulate('click');

      const numberValidate = Number(wrapper.find("h2").text().trim())

      
      expect(numberValidate).toBe(10)

    })
})