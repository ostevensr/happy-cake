import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar className='pers-navbar'>
            <Container fluid>
            
                <Navbar.Brand><Link to="/" className='texto-navbar'> <img className="icono-navbar" src="./src/assets/hogar.png"/> Home</Link></Navbar.Brand>
                <Navbar.Brand><Link to="/contacto" className='texto-navbar'> <img className="icono-navbar" src="./src/assets/contactos.png"/> Contacto </Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='texto-navbar'> Happy Cake <img className="icono-navbar" src="./src/assets/pastel.png"/> </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBar;