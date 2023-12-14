import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./logo.png"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Accessories from "../Pages/Accessories";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Home from "../Pages/Home";
import Order from "../Pages/Order";
import "./style.css"

export default class Header extends Component {
    render() {
        return(
            <>
                <Navbar sticky="top" collapseOnSet expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" >
                        <img
                            src={logo}
                            height="50"
                            width="50"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/men"> Men </Nav.Link>
                            <Nav.Link href="/women"> Women </Nav.Link>
                            <Nav.Link href="/accessories"> Accessories </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/men" element={<Men/>} />
                        <Route exact path="/women" element={<Women/>} />
                        <Route exact path="/accessories" element={<Accessories/>} />
                        <Route exact path="/order/:id" element={<Order/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}