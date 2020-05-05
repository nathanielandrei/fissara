import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavigationBar = (props) => {
    const user = useSelector(state => state.loginReducer.user);
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#">Fissara Test</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {user ? <Nav>
                                <Navbar.Text>
                                    Signed in as: <a href="#">{user.firstName}</a>
                                </Navbar.Text>
                                <NavDropdown alignRight title="Options" id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/login">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav> : null}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export { NavigationBar };