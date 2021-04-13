import { retornaArreglo } from '../../base-pruebas/07-deses-arr'

describe('Pruebas en destructuracion', () => {
   
   test('debe de retornar un string y un numero',()=>{
      const arreglo = retornaArreglo()
      const [letras, numero] = retornaArreglo()
      expect(arreglo).toEqual(['ABC',123])
      expect(typeof letras).toBe('string')
      expect(typeof numero).toBe('number')
   })

})