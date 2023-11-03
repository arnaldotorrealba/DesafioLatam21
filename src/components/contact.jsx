import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const Contact = () => {
    return (
        <>
            <Container>
                <h3 className="fs-1 text-center">
                    Cuéntanos, ¿en que te podemos ayudar?
                </h3>
                <Form.Label className="my-2" htmlFor="email">
                    Correo:
                </Form.Label>
                <Form.Control
                    placeholder="name@example.com"
                    aria-label="email"
                    id="email"
                />
                <Form.Label className="my-2" htmlFor="text-area">
                    Mensaje:
                </Form.Label>
                <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    id="text-area"
                />
                <Button className="my-2 d-block mx-auto send-btn">
                    Enviar
                </Button>
            </Container>
        </>
    );
};
