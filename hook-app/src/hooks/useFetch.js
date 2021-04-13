import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {

   const isMounted = useRef(true)

   const [state, setstate] = useState({
      data: null,
      loading: true,
      error: null
   })

   // creamos otro useEffect para poder utilizar el return cuando se desmonta ese hook y asi poder cambiar el useRef a false para asi no me lanse el cambio de estado cuando aya pasado los 4 segundo si en caso ya no este este hook utilizado
   // useEffect(() => {
      
   //    return () => {
   //       isMounted.current = false
   //    }
   // }, [])

   // se va activar este use effect de nuevo cuando la url cambie
   useEffect(() => {

      // ponemos esto para que carga el loader osea que enpiede el loader despues lo borramos
      setstate({
         data: null,
         loading: true,
         error: null
      })

      fetch(url)
         .then(resp => resp.json())
         .then(data => {
            
            // devolvemos la data y ponemos el loader en false
            setstate({
               data,
               loading: false,
               error: null
            })

            // setTimeout(()=>{
            //    if(isMounted.current){
            //       setstate({
            //          data,
            //          loading: false,
            //          error: null
            //       })
            //    }else{
            //       console.log("ya no se renderiza nada");
            //    }
            // },4000)
         })

   }, [url])

   return state
}