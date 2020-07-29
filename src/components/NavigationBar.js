import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
#navbar {
    position: fixed;

    width: 100%;
    z-index: 1;
}
@media only screen and (max-width: 800px) {
    #navbar {
        position: fixed;
        top: 0;
        width: 100%;
    }
  }
`;

export const NavigationBar = () => (
    <Styles>
    <Navbar id="navbar" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">Visit Eritrea</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="#">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#Project">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#Portfolio">Gallery</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#Resume">Activities</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#Contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)