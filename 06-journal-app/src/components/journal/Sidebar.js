import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { JournalEntries } from './JournalEntries'


export const Sidebar = () => {

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(startLogout())
    }

    return (

        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Jeyson</span>
                </h3>

                <button className="btn" onClick={handleLogin}>
                    Logout
                </button>
            </div>


            <div className="jounal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries></JournalEntries>
        </aside>
    )
}
