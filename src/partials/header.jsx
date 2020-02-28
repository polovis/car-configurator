import React from 'react';
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {
    render() {
        return (
            <Nav className='row'>
                <Nav.Item>
                    <Nav.Link href="/home">Car Configurator</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }

}

export default Header;