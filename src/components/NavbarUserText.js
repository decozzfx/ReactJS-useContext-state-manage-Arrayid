import {useAppContext} from '../contexts/app-context'

const NavbarUserText = () => {
    const context = useAppContext()

    return ( <span>Hi, {context.user.name}</span> )
}

export default NavbarUserText
