import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'
import { JournalEntries } from './JournalEntries'


export const Sidebar = () => {

    const dispatch = useDispatch()

    // del estado quiero el objeto auth y solo quiero el nombre 
    const { name } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(startLogout())
    }

    const handleAddNew = () => {
        dispatch(startNewNote())
    }

    return (

        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i> &nbsp;
                    <span>{name}</span>
                </h3>

                <button className="btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>


            <div
                onClick={handleAddNew}
                className="jounal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries></JournalEntries>
        </aside>
    )
}
