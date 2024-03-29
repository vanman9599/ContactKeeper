import React, { useReducer } from 'react'
import generateUUID from '../../utils/UUID'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'



import {
    SET_ALERT, REMOVE_ALERT
} from '../types'

const AlertState = props => {
    const initialState = []

    const [state, dispatch] = useReducer(AlertReducer, initialState)
    //SET ALERT
    const setAlert = (msg, type, timeout = 5000) => {
        const id = generateUUID()
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        })

        setTimeout(() => dispatch({ type: REMOVE_ALERT, paylaod: id }), timeout)
    }

    return (
        <AlertContext.Provider value={{
            alerts: state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState