import { type } from '../types/types';

export const login = (uid, displayName) => ({
    // retornamos de manera defrente el objeto de nuestro action que le devemos pasar
    type: type.login,
    payload: {
        uid,
        displayName
    }
}
)