import { type } from '../types/types'

export const setError = (err) => ({
    type: type.uiSetError,
    payload: err
})

export const removeError = () => ({
    type: type.uiReomveError
})