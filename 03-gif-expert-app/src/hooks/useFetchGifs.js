// los hooks son funciones,tambine pueden tener estado
import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGif'

export const useFetchGifs = (cat) => {
   const [state, setState] = useState({
      data: [],
      loading: true
   })
   // cambiamos el estado y esto cambiara tambien el valor en donde sea que estamos importando este custom hoook
   // setTimeout(_ => {
   //    setstate({
   //       data: [],
   //       loading: false
   //    })
   // }, 3000)

   useEffect(() => {

      getGif(cat)
         .then(images => {
            setState({
               data: images,
               loading: false
            })
            console.log(images);
         })

   }, [])

   return state
}