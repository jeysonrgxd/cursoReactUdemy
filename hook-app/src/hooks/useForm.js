import { useState } from "react"

export const useForm = (initialForm = {}) => {

   const [state, setstate] = useState(initialForm);

   const handleInput = ({ target }) => {
      setstate({
         ...state,
         [target.name]: target.value
      })
   }

   return [state, handleInput];

}
