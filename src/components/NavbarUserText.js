import {useAppContext} from '../contexts/app-context'

const NavbarUserText = () => {
    const [state] = useAppContext()
    console.info('navbar user text : render')

    return ( <span>Hi, {state.user.name}</span> )
}

export default NavbarUserText
