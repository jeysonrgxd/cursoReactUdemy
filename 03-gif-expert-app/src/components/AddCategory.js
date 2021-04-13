import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
   const [inputValue, setInputValue] = useState('')

   const handleChange = (e) => {
      setInputValue(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if(inputValue.trim().length>2){
         // al recibir la funcion set, podemos utilizar el callback el cual recive como parametro del callback el stado anterior y con eso podemos agregarle lo que queramos, ya que solo estamos obteniendo la funcion mas no las categorias
         setCategories(cats => [inputValue, ...cats])
      }
      setInputValue('')
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            value={inputValue}
            onChange={handleChange}
         />
      </form>
   )
}

AddCategory.prototype = {
   setCategories: PropTypes.func.isRequired
}


