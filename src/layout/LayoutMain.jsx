import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const LayoutMain = () => {
    return (
        <div>
            <header className="sticky top-0 z-50 ">
                <Header />
            </header>
            <Outlet />
        </div>
    )
}

export default LayoutMain