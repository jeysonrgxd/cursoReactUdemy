import { type } from '../types/types'

/*
    {
        uid: 'sakldnlksajdklñas',
        name: 'Jeyson'
    }

*/

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case type.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            }

        case type.logout:
            return {}

        default:
            return state
    }
}