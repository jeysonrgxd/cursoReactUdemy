import React from 'react'
import { useSelector } from 'react-redux'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {

    // const entries = [1, 2, 3, 4, 5]

    // obtenemos las notes del estado que nos da reducer con el hook useSelector
    const { notes } = useSelector(state => state.notes)
    // notes es un array de objetos

    return (
        <div className="journal__entries">
            {
                notes.map(note => (
                    <JournalEntry key={note.id} {...note} ></JournalEntry>
                ))
            }
        </div>
    )
}
