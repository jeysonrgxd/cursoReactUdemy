import React from 'react'

export const Sidebar = () => {
    return (

        <aside className="journal__sidebar">
            <div class="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Jeyson</span>
                </h3>

                <button class="btn">
                    Logout
                </button>
            </div>


            <div class="jounal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>
        </aside>
    )
}
