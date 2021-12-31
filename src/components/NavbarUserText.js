import React,{useContext} from 'react'
import { AppContext } from './contexts/app-context'

const NavbarUserText = () => {
    const context = useContext(AppContext)

    return ( <span>Hi, {context.user.name}</span> )
}

export default NavbarUserText
