const { getHeroeById, getHeroesByOwner } = require("../../base-pruebas/08-imp-exp")
import heroes from '../../data/heroes'


describe('Pruebas en funciones de heroes', () => {

   test('Deben de retornar un heroe', () => {
      const id = 1
      const heroe = getHeroeById(id)

      const heroeData = heroes.find(h => h.id == id)
      expect(heroe).toEqual(heroeData)
   })

   test('Deben de retornar undefined si el heroe no existe', () => {
      const id = 10
      const heroe = getHeroeById(id)

      expect(heroe).toBe(undefined)
   })

   test('Deben de retornar un arreglo con los heroes de dc', () => {
      const owner = 'DC'

      const arregloDC= getHeroesByOwner(owner)

      const heroesOwner = heroes.filter(h => {
         if (h.owner === owner){
            return h
         }
      })
 
      expect(heroesOwner).toEqual(arregloDC)
   })

   test('Deben de retornar un arreglo con los heroes de Marvel', () => {
      const owner = 'Marvel'

      const heroesOwner = heroes.filter(h => {
         if (h.owner === owner){
            return h
         }
      })

      expect(heroesOwner.length).toBe(2)
   })

})