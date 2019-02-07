import React, {Component} from 'react'
import {
    Navbar,
    NavbarBrand
} from 'reactstrap'

class NavBar extends Component {
    render() {
        return (
            <Navbar color='light' light>
                <NavbarBrand href='/'>
                    Online Judge
                </NavbarBrand>
            </Navbar>
        )
    }
}

export default NavBar