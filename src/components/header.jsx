import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { SiCakephp } from "react-icons/si";
import { FcHome, FcContacts } from "react-icons/fc";

export const Header = () => {
    return (
        <>
            <header>
                <Navbar bg="transparent" data-bs-theme="light">
                    <Container>
                        <Nav className="me-auto">
                            <Link
                                to="/"
                                className="text-dark ms-3 text-decoration-none"
                            >
                                <FcHome className="fs-4" /> Home
                            </Link>
                            <Link
                                to="/contact"
                                className="text-dark ms-3 text-decoration-none"
                            >
                                <FcContacts className="fs-4" />
                                Contacto
                            </Link>
                        </Nav>
                        <Navbar.Brand href="#home">
                            <SiCakephp className="fs-4" /> Happy Cake
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};
