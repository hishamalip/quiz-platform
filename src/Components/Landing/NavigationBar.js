import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href="/">Quiz-Platform</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#test">Test</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#test">Test</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
