import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBarComponents/NavBar";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <NavBar />
                <AppRouter />
                <Footer />
            </BrowserRouter>
        </ChakraProvider>
    );
};
