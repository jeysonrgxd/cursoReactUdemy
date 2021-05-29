import React from 'react'
import { NotesScreem } from '../notes/NotesScreem'
// import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
   return (
      <div className="journal__main-content">

         <Sidebar></Sidebar>

         <main>

            {/* <NothingSelected></NothingSelected> */}

            <NotesScreem></NotesScreem>


         </main>
      </div>
   )
}
