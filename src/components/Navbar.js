import React from 'react'
import NavbarLink from './NavbarLink.js'
import NavbarUser from './NavbarUser.js'

const Navbar = () => {
    return (
        <nav>
            <NavbarLink>Dasboard</NavbarLink>
            <NavbarLink>
                <NavbarUser/>
            </NavbarLink>
        </nav>
    )
}

export default Navbar
