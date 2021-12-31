import React from 'react'
import { useContext } from 'react'
import { AppContext } from './contexts/app-context'

const ToggleTheme = () => {
    const context = useContext(AppContext)
    return (
        <div>
            <button onClick={() => context.setTheme(context.theme === 'dark' ? 'light' : 'dark') }>Toggle Theme</button>
        </div>
    )
}

export default ToggleTheme
