import {useAppContext} from '../contexts/app-context'

const NavbarUserAvatar = () => {

    const context = useAppContext()


    return ( <img src={context.user.avatar} alt="avatar" width="50" /> )
}

export default NavbarUserAvatar
