import Container from "react-bootstrap/esm/Container";

export const Home = () => {
    return (
        <>
            <Container>
                <h1 className="text-center">Pastelería Happy Cake</h1>
                <p className="text-center">
                    ¡Bienvenidos a nuestro rincón dulce! Deléitate con nuestros
                    exquisitos postres y descubre el sabor de la felicidad.
                    ¡Entra y descubre un mundo de dulzura!
                </p>
                <div className="img-container">
                    <img
                        src="https://img.freepik.com/vector-gratis/pastel-cumpleanos-pastel-crema-dulce-velas-ilustracion_1284-52975.jpg?w=740&t=st=1699050186~exp=1699050786~hmac=7cb88e490e06fdb75fe49810063f315e77cf2efe685fdaabc6324e0b1e2cc12c"
                        alt=""
                        className="home-img"
                    />
                </div>
            </Container>
        </>
    );
};
