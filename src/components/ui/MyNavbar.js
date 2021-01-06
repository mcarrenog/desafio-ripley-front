import React, { useState } from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';


export const MyNavbar = ({ setSearch }) => {

 
    const [inputValue, setInputValue] = useState('');

    const handledInputChange = (e) => {

        setInputValue(e.target.value);
        console.log(e.target.value, 'MyNavbar');
    }

    const handledSubmit = (e) => {

        console.log('presione')
        e.preventDefault();

        setSearch(cats => [inputValue, ...cats]);

         

        // console.log('inputValue', this.props.search(inputValue));


       // searchDelegate(prods => [inputValue, ...prods]);
        // if (!Number(inputValue)) {

        //     if (inputValue.trim().length > 2) {
        //         searchDelegate(prods => [inputValue, ...prods]);
        //         setInputValue('');
        //     }
        // }
        // else {
        //     searchDelegate(prods => [inputValue, ...prods]);
            
        //     setInputValue('');

        // }
    }

    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Catálogo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/crud">Crud</Nav.Link>
                </Nav>
                <Form inline onSubmit={handledSubmit}>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2"  value={inputValue} onChange= {handledInputChange}/>
                    
                    <Button variant="outline-success">Buscar</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

    )
}

MyNavbar.propTypes = {
    setSearch: PropTypes.func.isRequired
}
