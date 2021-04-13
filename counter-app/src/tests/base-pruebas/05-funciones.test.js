import '@testing-library/jest-dom'

import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {

   test('getUser debe de retornar un objeto', () => {

      const userTest = {
         uid: 'ABV123',
         username: 'El_papi1502'
      }

      const user = getUser();

      // para comparar objetos usamos la funcion toEqueal de expect ya que el toBe no compara objetos solo datos primitivos
      expect(user).toEqual(userTest) 

   })

   test('getUsuarioActivo el usuario se encuentra activo', () => {

      const name = "jeyson"

      // const userTest = {
      //    uid: 'ABC567',
      //    username: name
      // }

      const userActive = getUsuarioActivo(name);

      // para comparar objetos usamos la funcion toEqueal de expect ya que el toBe no compara objetos solo datos primitivos
      expect(userActive).toEqual({
         uid: 'ABC567',
         username: name
      })

   })
})