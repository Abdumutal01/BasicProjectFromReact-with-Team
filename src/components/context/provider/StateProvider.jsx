import React, { useReducer } from 'react'
import ApContext from '../store'
import { reducer } from '../../SignUp/SignUp'

export default function StateProvider({ children }) {

    return (
        <ApContext.Provider value={useReducer(reducer)}>
            {children}
        </ApContext.Provider>
    )

}
