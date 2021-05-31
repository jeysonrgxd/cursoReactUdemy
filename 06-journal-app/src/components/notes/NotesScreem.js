import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreem = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://lasimagenesdegoku.com/wp-content/uploads/2017/08/Goku_ssj_1_by_gokusuke.jpg"
                        alt="image goku"
                    />
                </div>
            </div>
        </div>
    )
}
