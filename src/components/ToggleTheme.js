import React from 'react'
import { useThemeContext } from '../contexts/theme-context'

const ToggleTheme = () => {
    const [, dispatch] = useThemeContext()

    return (
        <div>
            <button onClick={() => dispatch({type : 'toggleTheme'}) }>Toggle Theme</button>
        </div>
    )
}

export default ToggleTheme
