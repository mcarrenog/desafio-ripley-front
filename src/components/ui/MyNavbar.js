import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'; 
export const MyNavbar = () => {
    return (
        
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Catálogo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/crud">Crud</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        
    )
}
