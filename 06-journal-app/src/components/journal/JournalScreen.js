import React from 'react'
import { useSelector } from 'react-redux'
import { NotesScreem } from '../notes/NotesScreem'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar.jsx'

export const JournalScreen = () => {

   const { active } = useSelector(state => state.notes)

   return (

      <div className="journal__main-content">

         <Sidebar></Sidebar>

         <main>

            {
               (active) ? (<NotesScreem></NotesScreem>) : (<NothingSelected></NothingSelected>)
            }

         </main>
      </div>

   )
}
