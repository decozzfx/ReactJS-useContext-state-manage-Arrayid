import React from 'react'
import {useAppContext} from '../contexts/app-context'

const ToggleTheme = () => {
    const context = useAppContext()
    return (
        <div>
            <button onClick={() => context.setTheme(context.theme === 'dark' ? 'light' : 'dark') }>Toggle Theme</button>
        </div>
    )
}

export default ToggleTheme
