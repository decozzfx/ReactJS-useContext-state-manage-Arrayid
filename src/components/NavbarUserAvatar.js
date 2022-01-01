import {useAppContext} from '../contexts/app-context'

const NavbarUserAvatar = () => {

    const [state] = useAppContext()
    console.info('navbar user avatar : render')


    return ( <img src={state.user.avatar} alt="avatar" width="50" /> )
}

export default NavbarUserAvatar
