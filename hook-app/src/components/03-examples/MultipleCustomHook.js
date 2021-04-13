import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import '../02-useEffect/effect.css'

export const MultipleCustomHook = () => {

   const { counter, increment } = useCounter(1)

   const info = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

   const { data, error, loading } = info

   const { quote, author } = !!data && data[0]


   return (
      <div>
         <h1>BreakingBad Quotes</h1>
         <hr />

         {
            loading
               ?
               (
                  <div className="alert alert-info text-center">
                     Loading
                  </div>
               )
               :
               (
                  <blockquote className="blockquote text-right">
                     <p className="mb-0" >{quote}</p>
                     <footer className="blockquote-footer">{author}</footer>
                  </blockquote>
               )
         }

         <button
            className="btn btn-primary"
            onClick={increment}
         >Next</button>

      </div>
   )
}
