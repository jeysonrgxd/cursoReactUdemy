// encapsulamos nuestros test y le ponemos un nombre general
describe("Pruebas en el archivo demo.test.js",()=>{

   // creando nuestro primer test, recive el nombre del test, un callback de ejecucacion o comprobacion
   test("deben ser iguales los string" , () =>{

      // let isActive = true
      
      // forzamos el error para visualizar en consola como se manifiesta
      // if(isActive){
      //    throw new Error("No esta activo")
      // }

      // comporamos valores primitivos con expect(a).toBe(b) b es lo que tiene que ser y a es lo que examinamos
      let mensaje1 = "Hola Mundo"
      let mensaje2 = "Hola Mundo"
      // examinamos mensaje1, tiene que ser igual a mensaje2
      expect(mensaje1).toBe(mensaje2)

   })

})