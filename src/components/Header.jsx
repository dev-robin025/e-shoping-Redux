import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Navbar, Container, Nav, Badge, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const cartProduct = useSelector(state => state.cart.cartProduct)

    return (
        <Navbar bg="light" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <b>E-<font color='orange'>Shopping</font></b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/cartProduct">
                            <InputGroup>
                                <InputGroup.Text style={{ background: 'orange', color: 'black' }}>
                                    <FaCartPlus /> <Badge bg="secondary">{cartProduct?.length}</Badge>
                                </InputGroup.Text>
                            </InputGroup>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;