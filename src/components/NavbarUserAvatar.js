import React,{useContext} from 'react'
import { AppContext } from './contexts/app-context'

const NavbarUserAvatar = () => {

    const context = useContext(AppContext)


    return ( <img src={context.user.avatar} alt="avatar" width="50" /> )
}

export default NavbarUserAvatar
