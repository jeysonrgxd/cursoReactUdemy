import { type } from '../types/types'

export const setError = (err) => ({
    type: type.uiSetError,
    payload: err
})

export const removeError = () => ({
    type: type.uiReomveError
})

export const startLoading = () => ({
    type: type.uiStartLoading
})

export const finishLoading = () => ({
    type: type.uiFinishLoading
})