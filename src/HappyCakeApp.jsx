import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Routes, Route } from "react-router-dom";

function HappyCakeApp() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default HappyCakeApp;
