import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header>
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                        <Nav className="me-auto">
                            <Link
                                to="/"
                                className="text-dark ms-3 text-decoration-none"
                            >
                                Home
                            </Link>
                            <Link
                                to="/contact"
                                className="text-dark ms-3 text-decoration-none"
                            >
                                Contacto
                            </Link>
                        </Nav>
                        <Navbar.Brand href="#home">Happy Cake</Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};
