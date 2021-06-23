import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

import { Link } from 'react-scroll';


const NavigationBar = () => {


    return (

        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Avaye's Site</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/wc">Web Components</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );

}

export default NavigationBar;