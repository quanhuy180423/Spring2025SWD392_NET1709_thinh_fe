import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "@components/Footer/index.jsx"
import { useEffect } from "react";

const LayoutMain = () => {
    const location = useLocation();

    useEffect(() => {
        //functions here
    }, [location.pathname]);

    return (
        <div>
            <header className="sticky top-0 z-50 ">
                <Header />
            </header>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default LayoutMain