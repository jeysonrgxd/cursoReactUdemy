const { getHeroeByIdAsync } = require("../../base-pruebas/09-promesas")
const { default: heroes } = require("../../data/heroes")

describe("Pruebas con promesas", () => {

   // le pasamos el done para poder testear peticiones asyncronas
   test('getHeroByIdAsync debe de retornar un Héroe async', (done) => {
      const id = 1;
      getHeroeByIdAsync(id)
         .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
         });
   });

   test('debe de obtener un error si el héroe por el id no existe', (done) => { 
      const id = 10;
      getHeroeByIdAsync(id)
         .catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
            
         })
   })
});