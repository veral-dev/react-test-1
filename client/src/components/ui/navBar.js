import React, { Component } from 'react'

import { Link } from 'react-router-dom'

/* ---- STYLE COMPONENTS ---- */
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

/* ---- ICONS ---- */
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import GrainIcon from '@material-ui/icons/Grain';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (

            <Navbar expand="lg" variant="dark">
                {/* <Navbar.Brand href="#home">CoastersApp!</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button><MenuIcon fontSize="small" /> <Link to="/">Browse</Link></Button>
                        <Button><AddIcon fontSize="small" /> <Link to="/profile">Add new questions</Link></Button>
                        <Button><GrainIcon fontSize="small" /><Link to="/profile">Api</Link></Button>
                        <Button><ForumIcon fontSize="small" /> <Link to="/profile">Discuss</Link></Button>
                        <Button><ExitToAppIcon fontSize="small" /> <Link to="/profile">Login</Link></Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default Navigation