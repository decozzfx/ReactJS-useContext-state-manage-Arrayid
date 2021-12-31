import React, { useContext } from 'react'
import { AppContext } from './contexts/app-context'

export const Setting = () => {
    const context = useContext(AppContext)

    return (
        <input type='text' onChange={(e) => context.setUser({
            ...context.user, // merch data lama agar tidak hilang
            name : e.target.value,            
        })} placeholder='change name' value={context.user.name ?? ''}/>
    )
}
