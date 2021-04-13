// importamos esto para que non ayude con el autocompleatado
import '@testing-library/jest-dom'

import {getSaludo} from '../../base-pruebas/02-template-string'

describe("Pruebas en 02-template-string", () =>{

   test("getSaludo debe retornar hola jeyson",()=>{
      const nombre = 'Jeyson'
      const saludo = getSaludo(nombre)
      
      expect(saludo).toBe("Hola Jeyson")

   })

   test("getSaludo debe retornar Hola Carlos si no hay argumento nombre",()=>{
      // const nombre = 'Jeyson'
      const saludo = getSaludo()
      
      expect(saludo).toBe("Hola Carlos")

   })
})