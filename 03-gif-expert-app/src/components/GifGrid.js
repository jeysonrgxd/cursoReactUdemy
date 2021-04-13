import React from 'react'
// import { getGif } from '../helpers/getGif'
import { GifGridItem } from './GifGridItem'


//<------- importamos nuestro custom hook-----
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ cat }) => {

   // const [images, setImages] = useState([])

   // utilizamos nuestro custom hook que nos devuelve un objeto y por eso usamos destructuracion
   const { data, loading } = useFetchGifs(cat)

   //Este codigo nos sirve para que lo que esta dentro del useEffect se ejecute solo una vez osea cuando el componente es renderizado por primera vez nada mas despues no
   // useEffect(() => {
   //    getGif(cat)
   //       .then(imgs => setImages(imgs))
   // }, [cat])

   

   return (
      <>
         <h3 class="animate__animated animate__fadeIn">{cat}</h3>

         {/*--------- probamos el custom hook------- */}
         <strong>
            {/* esta expresion de js es para que si existe loading me dara nada pero si no existe me dara Loading esto a diferencia de los operadores ternarios, me sirve cuando yo solo quiero mostrar algo cuando sea falso mas no quiero mostrar nada cuando sea verdadero*/}
            {loading && <p class="animate__animated animate__flash">Loading...</p>}
         </strong>

         <div className="card-grid">
            {
               data.map(image => (
                  // podemos pasarle todos los props de esta manera con el spreed operator solo es recomendable utilizar esto si es que sabes que valores tiene y el cual utilizaras ya que estas pasando todos los valores del objeto image del array de images
                  <GifGridItem key={image.id} {...image} />
               ))
            }

         </div>
      </>

   )
}
