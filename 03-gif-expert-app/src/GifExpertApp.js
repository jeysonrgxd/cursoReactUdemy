import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

   // no devemos mutar las constantes sino utilizar el setCategories

   const [categories, setCategories] = useState(['One Punch']);

   // metodo1
   // const handleAdd = _ => { setCategories([...categories, 'Naruto']) }

   // metodo2
   // const handleAdd = _ => { 
   //  el set Categori puede no solo recivir el valor que modifica el estado sino tambien puede recibir un callback donde su argumento es el valor del estado antes de modificarlo
   // setCategories(cats => [...cats,'Naruto']) 
   // }
   return (
      <>
         <h2>GifExpertApp</h2>
         {/* <button onClick={handleAdd}>Agregar</button> */}

         {/* le pasamos un prop el cual sera el set del state para poder realizar el cambio desde el cpomponente */}
         <AddCategory setCategories={setCategories}/>
         <hr />
         {/* <ol> */}
               {// utilizamos map por que es una expresion que regresa algo, a cambio no utilizamos for o for of ya que esto no devuelves algo
               // categories.map(categorie => {
               //    return <li key ={categorie}> <GifGrid cat={categorie} /></li>
               // })
               }
         {/* </ol> */}
         {
            categories.map(categorie => {
               return <GifGrid key={categorie} cat={categorie} />
            })
         }
         
      </>
   )
}
