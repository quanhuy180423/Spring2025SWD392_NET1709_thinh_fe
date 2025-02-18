import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "@components/Footer/index.jsx"

const LayoutMain = () => {
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