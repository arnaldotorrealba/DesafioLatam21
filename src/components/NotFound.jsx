import Container from "react-bootstrap/esm/Container";
import { FcAssistant } from "react-icons/fc";

export const NotFound = () => {
    return (
        <>
            <Container>
                <h1 className="text-center">
                    <FcAssistant />
                </h1>
                <p className="text-center">
                    ¡Oops! Parece que te has perdido en el mundo de los dulces.
                    Nuestros pasteles son perfectos, pero parece que esta página
                    no lo es. ¡Regresa a nuestra página principal y continúa
                    disfrutando de nuestras delicias!
                </p>
            </Container>
        </>
    );
};
